import { Head, Link } from "@inertiajs/react";

import SplineViewer from "@/3D/SplineViewer";

import WelcomeHeader from "@/Layouts/Components/WelcomeHeader";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />

            <div className="container-root">
                <WelcomeHeader auth={auth} />
                <main className="flex-1 flex flex-col items-center">
                    <SplineViewer url="https://prod.spline.design/YBQa0ERfsBIfW2Wu/scene.splinecode" />
                </main>
                <footer className="p-4 text-center">
                    Created by{" "}
                    <a
                        href="https://github.com/ceftx"
                        className="text-indigo-900"
                    >
                        {" "}
                        @ceftx
                    </a>
                </footer>
            </div>
        </>
    );
}
