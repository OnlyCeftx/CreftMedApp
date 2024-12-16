import React, { useEffect, useState } from "react";
const SplineViewer = ({ url, aspectRatio = 16 / 9, maxHeight = "83vh" }) => {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        // Detectar tema claro/oscuro
        const checkTheme = () => {
            const isDark = document.documentElement.classList.contains("dark");
            setIsDarkMode(isDark);
        };
        // Cargar script de Spline
        const script = document.createElement("script");
        script.src =
            "https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js";
        script.type = "module";
        script.onload = () => setIsScriptLoaded(true);
        document.body.appendChild(script);
        // Chequear tema inicial
        checkTheme();
        // Observar cambios en la clase del tema
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => {
            document.body.removeChild(script);
            observer.disconnect();
        };
    }, []);
    return (
        <div
            className="relative w-full overflow-hidden"
            style={{
                height: maxHeight,
                position: "relative",
            }}
        >
            {/* Gradiente circular para tema claro */}
            {!isDarkMode && (
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: `radial-gradient(
                            circle at center,
                            rgba(0,0,0,0) 0%,
                            rgba(0,0,0,0.2) 50%,
                            rgba(0,0,0,0.5) 100%
                        )`,
                        mixBlendMode: "multiply",
                    }}
                />
            )}
            {/* Contenedor de Spline */}
            {isScriptLoaded && (
                <spline-viewer
                    url={url}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                ></spline-viewer>
            )}
        </div>
    );
};
export default SplineViewer;
