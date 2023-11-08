import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Link } from "@remix-run/react";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ThemeDropdown } from "./theme-dropdown";

export const Header: React.FC = () => {
    return (
        <header className="sticky px-4 top-0 z-40 border-b-[1px] border-transparent border-b-border bg-background">
            <div className="container p-4 flex justify-between gap-4 items-end">
                <Link
                    to="/"
                    aria-label={`${siteConfig.title} | Home`}
                    title={`${siteConfig.title} | Home`}
                    className={cn(
                        buttonVariants(),
                        "leading-none hyphens-none h-auto bg-transparent hover:bg-transparent font-cursive h2 p-0",
                    )}
                >
                    museo
                </Link>

                <nav className="flex items-center gap-2 w-full justify-end md:justify-between h-full">
                    <ThemeDropdown />

                    <div className="flex items-center gap-2">
                        <Link
                            to="/trailer"
                            className={cn(
                                buttonVariants({ colors: "primary" }),
                                "tracking-wider uppercase font-semibold",
                            )}
                        >
                            TRAILER
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};
