import type { Artwork } from "@/types";
import React from "react";
import { Dropdown, DropdownContent, DropdownLabel } from "./ui/dropdown";
import { useSearchParams } from "@remix-run/react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import themeIcons from "@/assets/theme-icons.svg";

const categories: Artwork["category"][] = [
    "digital",
    "photography",
    "traditional",
];

const CategoryDropdown: React.FC = React.memo(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category");

    return (
        <Dropdown id="filter-dropdown" className="flex items-center">
            <DropdownLabel colors="ghost" className="text-sm" rounded="sm">
                <p className="sr-only">
                    Click to expand and choose a theme to set on the browser.
                    The options are light, dark, and system settings.
                </p>

                <p className="flex gap-2 items-center">
                    <svg>
                        <use href={themeIcons + "#filter"}></use>
                    </svg>
                    {category &&
                    categories.includes(category as Artwork["category"])
                        ? category[0].toUpperCase() + category.slice(1)
                        : "Filter by category"}
                </p>
            </DropdownLabel>

            <DropdownContent
                offset={5}
                position="left"
                className="z-20 bg-muted text-muted-foreground px-0 shadow-lg shadow-black/20 min-w-[8.5rem] w-auto"
            >
                <Button
                    value="clear"
                    name="category"
                    className={cn(
                        "gap-4 w-full h-auto justify-start py-1 px-3 text-base font-bold",
                    )}
                    colors="ghost"
                    onClick={() => {
                        setSearchParams((prev) => {
                            prev.delete("category");

                            return prev;
                        });
                    }}
                >
                    <svg>
                        <use href={themeIcons + "#x-icon"}></use>
                    </svg>
                    Clear
                </Button>
                {categories.map((c) => (
                    <Button
                        key={c}
                        value={c}
                        name="category"
                        className={cn(
                            "gap-4 w-full h-auto justify-start py-1 px-3",
                            {
                                "bg-secondary hover:bg-secondary/90 font-bold scale-95":
                                    category == c,
                            },
                        )}
                        colors="ghost"
                        disabled={category == c}
                        onClick={() => {
                            setSearchParams((prev) => {
                                prev.set("category", c);

                                return prev;
                            });
                        }}
                    >
                        <svg className="stroke-background">
                            <use
                                href={
                                    themeIcons +
                                    `#${
                                        c == "photography"
                                            ? "camera-small"
                                            : c == "traditional"
                                            ? "pencil-small"
                                            : "computer-small"
                                    }`
                                }
                            ></use>
                        </svg>
                        {c[0].toUpperCase() + c.slice(1)}
                    </Button>
                ))}
            </DropdownContent>
        </Dropdown>
    );
});

export { CategoryDropdown };
