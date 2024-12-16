import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Logo as IconLogo } from "@/Icons/Logo";

export default function WelcomeHeader({ auth }) {
    return (
        <>
            <nav className={`header-static relative`}>
                <div className="menu-header">
                    <div className="my-auto ms-4">
                        <IconLogo
                            icon="streamline:waiting-appointments-calendar-solid"
                            width="34"
                            height="34"
                        />
                    </div>
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
                        <div className="item-menu">
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
