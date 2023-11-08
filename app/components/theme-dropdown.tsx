import React from "react";
import { Dropdown, DropdownContent, DropdownLabel } from "./ui/dropdown";
import { useThemes } from "@/hooks/useThemes";
import themesIcon from "@/assets/theme-icons.svg";
import { useFetcher } from "@remix-run/react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const ThemeDropdown: React.FC = React.memo(() => {
    const themes = useThemes();
    const fetcher = useFetcher();

    return (
        <Dropdown id="theme-dropdown" className="flex items-center">
            <DropdownLabel colors="ghost" size="icon">
                <p className="sr-only">
                    Click to expand and choose a theme to set on the browser.
                    The options are light, dark, and system settings.
                </p>
                <svg
                    className={cn("w-6 h-6 inline", {
                        "hidden dark:inline": themes != "dark",
                    })}
                >
                    <use href={themesIcon + "#moon-solid"}></use>
                </svg>
                <svg
                    className={cn("w-6 h-6 inline", {
                        "hidden dark:hidden": themes != "light",
                    })}
                >
                    <use href={themesIcon + "#sun-solid"}></use>
                </svg>
            </DropdownLabel>

            <DropdownContent
                offset={5}
                position="right"
                className="w-40 z-20 md:left-0 bg-muted text-muted-foreground px-0 shadow-lg shadow-black/20"
            >
                <div className="relative">
                    <fetcher.Form method="post" action="/color-scheme">
                        <Button
                            type="submit"
                            value="light"
                            name="colorScheme"
                            className={cn(
                                "gap-4 w-full h-auto justify-start py-1 px-3",
                                {
                                    "bg-secondary hover:bg-secondary/90 font-bold scale-95":
                                        themes == "light",
                                },
                            )}
                            colors="ghost"
                            disabled={themes == "light"}
                        >
                            <svg
                                className={cn("w-6 h-6", {
                                    "stroke-2": themes == "light",
                                })}
                            >
                                <use href={themesIcon + "#sun-solid"}></use>
                            </svg>
                            Light
                        </Button>

                        <Button
                            type="submit"
                            value="dark"
                            name="colorScheme"
                            className={cn(
                                "gap-4 w-full h-auto justify-start py-1 px-3",
                                {
                                    "bg-secondary hover:bg-secondary/90 font-bold scale-95":
                                        themes == "dark",
                                },
                            )}
                            colors="ghost"
                            disabled={themes == "dark"}
                        >
                            <svg
                                className={cn("w-6 h-6", {
                                    "stroke-2": themes == "dark",
                                })}
                            >
                                <use href={themesIcon + "#moon-solid"}></use>
                            </svg>
                            Dark
                        </Button>

                        <Button
                            type="submit"
                            value="system"
                            name="colorScheme"
                            className={cn(
                                "gap-4 w-full h-auto justify-start py-1 px-3",
                                {
                                    "bg-secondary hover:bg-secondary/90 font-bold scale-95":
                                        themes == "system",
                                },
                            )}
                            colors="ghost"
                            disabled={themes == "system"}
                        >
                            <svg
                                className={cn("w-6 h-6 stroke-background", {
                                    "stroke-2": themes == "system",
                                })}
                            >
                                <use
                                    href={themesIcon + "#settings-solid"}
                                ></use>
                            </svg>
                            System
                        </Button>
                    </fetcher.Form>
                </div>
            </DropdownContent>
        </Dropdown>
    );
});

export { ThemeDropdown };
