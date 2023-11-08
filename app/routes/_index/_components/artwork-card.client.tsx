import type { Artwork } from "@/types";
import React from "react";

import { cn } from "@/lib/utils";
import Masonry from "masonry-layout";
import { Link } from "@remix-run/react";

const ArtworkCard: React.FC<{
    artworkData: Artwork;
    isLayoutComplete: boolean;
    masonry: Masonry | null;
    idx: number;
}> = React.memo(
    ({
        artworkData: { title, description, category, artist },
        isLayoutComplete,
        masonry,
        idx,
    }) => {
        const [isVisible, setIsVisible] = React.useState(false);
        const [didAvifFail, setDidAvifFail] = React.useState(false);
        const [didWebpFail, setDidWebpFail] = React.useState(false);
        const [didImgLoad, setDidImgLoad] = React.useState(false);

        const intersectionObserver = React.useRef<IntersectionObserver | null>(
            null,
        );

        const imgRef = React.useRef<HTMLImageElement>(null);

        const srcSets = React.useMemo(() => {
            if (didAvifFail) {
                return !didWebpFail
                    ? isVisible || idx < 5
                        ? ` /assets/${category}/250/${title.toLowerCase()}.webp 250w,
                            /assets/${category}/500/${title.toLowerCase()}.webp 750w,
                            /assets/${category}/1000/${title.toLowerCase()}.webp 1000w`
                        : undefined
                    : isVisible || idx < 5
                    ? `/assets/${category}/250/${title.toLowerCase()}.jpg 250w,
                            /assets/${category}/500/${title.toLowerCase()}.jpg 750w,
                            /assets/${category}/1000/${title.toLowerCase()}.jpg 1000w`
                    : undefined;
            } else {
                return isVisible || idx < 5
                    ? `/assets/${category}/250/${title.toLowerCase()}.avif 250w,
                        /assets/${category}/500/${title.toLowerCase()}.avif 750w,
                        /assets/${category}/1000/${title.toLowerCase()}.avif 1000w`
                    : undefined;
            }
        }, [didAvifFail, didWebpFail, isVisible]);

        const checkIfVisible = React.useCallback(
            (node: HTMLAnchorElement) => {
                if (intersectionObserver.current) {
                    intersectionObserver.current.disconnect();
                }

                intersectionObserver.current = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.isIntersecting &&
                                isLayoutComplete &&
                                idx >= 5
                            ) {
                                setIsVisible(true);

                                if (imgRef.current) {
                                    imgRef.current.addEventListener(
                                        "load",
                                        () => {
                                            setDidImgLoad(true);

                                            if (masonry) {
                                                masonry.layout &&
                                                    masonry.layout();
                                            }
                                        },
                                        {
                                            once: true,
                                        },
                                    );
                                }

                                intersectionObserver.current?.disconnect();
                            }
                        });
                    },
                    {
                        rootMargin: "0px 0px 100px 0px",
                    },
                );

                if (node instanceof Element) {
                    intersectionObserver.current.observe(node);
                }
            },
            [isLayoutComplete, masonry, idx],
        );

        return (
            <Link
                to={`/slideshow?artwork=${title}`}
                className={cn(
                    "p-0 h-auto block group relative overflow-hidden float-left artwork-card w-full xs:w-[47.5%] md:w-[31.65%] xl:w-[23.0875%] mb-4 md:mb-5 lg:mb-8 transition-[filter] will-change-[filter,top,left] duration-500",
                    {
                        "filter blur-sm": !didImgLoad && idx >= 5,
                    },
                )}
                title={`${title} by ${artist}. Category: ${category}`}
                aria-label={`${title} by ${artist}. Category: ${category}`}
                ref={checkIfVisible}
            >
                <div className="md:opacity-0 md:group-hover:opacity-100 md:will-change-[opacity] md:transition-[opacity] md:duration-500 bottom-0 left-0 absolute z-10 flex items-end">
                    <div className="p-6">
                        <h2 className="h1 xs:h4 md:h5 lg:h4 2xl:h3 font-bold">
                            {title}
                        </h2>
                        <p>{artist}</p>
                    </div>
                </div>
                <img
                    srcSet={srcSets}
                    onError={() => {
                        if (!didAvifFail) {
                            setDidAvifFail(true);
                        }

                        if (didAvifFail && !didWebpFail) {
                            setDidWebpFail(true);
                        }
                    }}
                    className={
                        "md:group-hover:filter md:group-hover:blur-sm md:group-hover:bg-background/20 md:will-change-[filter,background-color] md:transition-[filter,background-color,transform] md:duration-500 w-full max-w-full h-fit"
                    }
                    alt={description}
                    src={`/assets/${category}/10/${title.toLowerCase()}.jpg`}
                    sizes="(min-width: 520px) 47.5%, (min-width: 768px) 31.65%, (min-width: 1280px) 23.0875%, 100%"
                    ref={imgRef}
                />
            </Link>
        );
    },
);

ArtworkCard.displayName = "ArtworkCard";

export default ArtworkCard;
