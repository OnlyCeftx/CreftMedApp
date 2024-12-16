import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";

export default function WelcomeHeader({ auth }) {
    const [isHidden, setIsHidden] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const headerStatic = document.querySelector(".header-static");
            const headerFixed = document.querySelector(".header-fixed");
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                headerStatic?.classList.add("hidden");
                headerFixed?.classList.remove("hidden");
                headerFixed?.classList.add("center");
                setIsHidden(false);
            } else {
                if (scrollTop === 0) {
                    headerStatic?.classList.remove("hidden");
                    headerFixed?.classList.add("hidden");
                    headerFixed?.classList.remove("center");
                    setIsHidden(true);
                }
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>
            <nav className={`header-static relative`}>
                <Logo />
                <div className="menu-header">
                    <div className="flex">
                        {auth.user ? (
                            <a href={route("dashboard")} className="item-menu">
                                Dashboard
                            </a>
                        ) : (
                            <>
                                <a href={route("login")} className="item-menu">
                                    Log in
                                </a>
                                <a
                                    href={route("register")}
                                    className="item-menu"
                                >
                                    Register
                                </a>
                            </>
                        )}
                    </div>
                    <div className="item-menu">
                        <ThemeSwitcher/>
                    </div>
                </div>
            </nav>
            <nav
                className={`header-fixed relative ${isHidden ? "hidden" : ""}`}
            >
                <div className="menu-header glass-effect-menu">
                    <div className="flex">
                        {auth.user ? (
                            <a href={route("dashboard")} className="item-menu">
                                Dashboard
                            </a>
                        ) : (
                            <>
                                <a
                                    href={route("login")}
                                    className="log-in-button"
                                >
                                    Log in
                                </a>
                                <a
                                    href={route("register")}
                                    className="log-in-button"
                                >
                                    Register
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
