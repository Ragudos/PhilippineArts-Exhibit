import React from "react";

import { siteConfig } from "@/config/site";
import { generateMetadata } from "@/lib/metadata";

// @ts-ignore
import themeIcons from "@/assets/theme-icons.svg";

import { Button } from "@/components/ui/button";
import { MetaFunction, useLoaderData, useSearchParams } from "@remix-run/react";
import { loader } from "../_loaders/root";
import { ArtworkDetails } from "./_components/artwork-details";

import {
    Dropdown,
    DropdownContent,
    DropdownLabel,
} from "@/components/ui/dropdown";
import { cn } from "@/lib/utils";

export const meta: MetaFunction = () => {
    return generateMetadata({
        title: {
            isAbsolute: false,
            text: "| Slideshow",
        },
        description: siteConfig.description,
    });
};

const DEFAULT_TIME = 10_000;

export default function Slideshow() {
    const artworks = useLoaderData<typeof loader>();
    const [searchParams, setSearchParams] = useSearchParams();
    const [timeLeftBeforeNextSlide, setTimeLeftBeforeNextSlide] =
        React.useState(DEFAULT_TIME);
    const [isPaused, setIsPaused] = React.useState(false);

    const idxOfArtworkToBeShown = React.useMemo(() => {
        return artworks.findIndex((artwork) => {
            return (
                artwork.title.toLowerCase().trim() ==
                searchParams.get("artwork")?.toLowerCase().trim()
            );
        });
    }, [artworks, searchParams.get("artwork")]);

    const artworkToBeShown = artworks[idxOfArtworkToBeShown];
    const detailsRef = React.useRef<HTMLDetailsElement>(null);

    const handleNextArtwork = React.useCallback(() => {
        setSearchParams((curr) => {
            const newIdx = (idxOfArtworkToBeShown + 1) % artworks.length;

            curr.set("artwork", artworks[newIdx].title);

            return curr;
        });
    }, [artworks, idxOfArtworkToBeShown]);

    React.useEffect(() => {
        if (idxOfArtworkToBeShown == -1) {
            return;
        }

        let timer: NodeJS.Timeout | undefined;

        timer = setTimeout(() => {
            if (!isPaused) {
                setTimeLeftBeforeNextSlide((curr) => {
                    const diff = curr - 1000;

                    return diff <= 0 ? DEFAULT_TIME : diff;
                });
            }
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [artworks, idxOfArtworkToBeShown, isPaused, timeLeftBeforeNextSlide]);

    React.useEffect(() => {
        if (timeLeftBeforeNextSlide <= 1000) {
            handleNextArtwork();
        }
    }, [timeLeftBeforeNextSlide]);

    return (
        <React.Fragment>
            {artworkToBeShown && (
                <div id="slideshow" className="flex flex-col min-h-[80dvh]">
                    <ArtworkDetails
                        artwork={artworkToBeShown}
                        setIsPaused={setIsPaused}
                    />

                    <div className="z-50 fixed bottom-0 left-0 w-full bg-background">
                        <div
                            className="w-full h-[0.175rem] relative bg-accent/20"
                            aria-label="Slideshow Progress"
                        >
                            <span
                                className="left-0 top-0 absolute h-full bg-accent transition-[width] will-change-[width] duration-500"
                                style={{
                                    width: `${
                                        ((idxOfArtworkToBeShown + 1) /
                                            artworks.length) *
                                        100
                                    }%`,
                                }}
                            />
                        </div>

                        <div className="flex justify-between items-center gap-4 flex-wrap px-4 py-2">
                            <Dropdown
                                ref={detailsRef}
                                className="flex items-center"
                            >
                                <DropdownLabel
                                    className="h-auto flex-col px-4 py-2 items-start"
                                    rounded="sm"
                                    colors="ghost"
                                >
                                    <strong className="h5 font-semibold">
                                        {artworkToBeShown.title}
                                    </strong>
                                    <small>{artworkToBeShown.artist}</small>
                                </DropdownLabel>

                                <DropdownContent
                                    position="center"
                                    offset="-10"
                                    className="flex-col bg-muted text-muted-foreground flex gap-2 max-h-[20rem] overflow-y-auto"
                                >
                                    {artworks.map((artwork) => (
                                        <Button
                                            key={artwork.title}
                                            onClick={() => {
                                                setSearchParams((curr) => {
                                                    curr.set(
                                                        "artwork",
                                                        artwork.title,
                                                    );

                                                    return curr;
                                                });

                                                detailsRef.current?.removeAttribute(
                                                    "open",
                                                );
                                            }}
                                            title={`View ${artwork.title}`}
                                            aria-label={`View ${artwork.title}`}
                                            colors="ghost"
                                            className={cn(
                                                "flex-col py-2 px-4 h-auto",
                                                {
                                                    "bg-accent/20 scale-95":
                                                        artwork.title ==
                                                        artworkToBeShown.title,
                                                },
                                            )}
                                        >
                                            <strong className="h5 semibold">
                                                {artwork.title}
                                            </strong>
                                            <small>{artwork.artist}</small>
                                        </Button>
                                    ))}
                                </DropdownContent>
                            </Dropdown>

                            <div className="flex items-center">
                                <Button
                                    aria-label="Go to previous artwork"
                                    size="icon"
                                    colors="ghost"
                                    className="p-0"
                                    onClick={() => {
                                        setSearchParams((curr) => {
                                            const newIdx =
                                                idxOfArtworkToBeShown == 0
                                                    ? artworks.length - 1
                                                    : idxOfArtworkToBeShown - 1;

                                            curr.set(
                                                "artwork",
                                                artworks[newIdx].title,
                                            );

                                            return curr;
                                        });
                                        setTimeLeftBeforeNextSlide(
                                            DEFAULT_TIME,
                                        );
                                    }}
                                >
                                    <svg>
                                        <use
                                            href={themeIcons + "#chevron-left"}
                                        ></use>
                                    </svg>
                                </Button>

                                <Button
                                    aria-label="Pause/Play slideshow"
                                    size="icon"
                                    colors="ghost"
                                    className="p-0"
                                    onClick={() => {
                                        setIsPaused((p) => {
                                            return !p;
                                        });
                                    }}
                                >
                                    {!isPaused && (
                                        <svg>
                                            <use
                                                href={
                                                    themeIcons + "#pause-solid"
                                                }
                                            ></use>
                                        </svg>
                                    )}

                                    {isPaused && (
                                        <svg>
                                            <use
                                                href={
                                                    themeIcons + "#play-solid"
                                                }
                                            ></use>
                                        </svg>
                                    )}
                                </Button>

                                <Button
                                    aria-label="Go to next artwork"
                                    size="icon"
                                    colors="ghost"
                                    className="p-0"
                                    onClick={() => {
                                        handleNextArtwork();
                                        setTimeLeftBeforeNextSlide(
                                            DEFAULT_TIME,
                                        );
                                    }}
                                >
                                    <svg>
                                        <use
                                            href={themeIcons + "#chevron-right"}
                                        ></use>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!artworkToBeShown && (
                <div className="min-h-[50dvh] grid place-items-center">
                    <div className="flex flex-col gap-2">
                        <p>There is no artwork with that title.</p>

                        <Button
                            colors="secondary"
                            onClick={() => {
                                setSearchParams((curr) => {
                                    curr.set("artwork", artworks[0].title);

                                    return curr;
                                });
                            }}
                        >
                            Start at the beginning?
                        </Button>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export { loader };
