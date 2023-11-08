import type { Artwork } from "@/types";

import React from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

import ArtworkCard from "./artwork-card.client";

const SectionOfArtworks: React.FC<{ artworks: Artwork[] }> = ({ artworks }) => {
    const [masonry, setMasonry] = React.useState<Masonry | null>(null);
    const [isLayoutFinished, setIsLayoutFinished] = React.useState(false);

    const sectionRef = React.useRef<HTMLElement>(null);
    const loadingIndicatorRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        setMasonry(
            new Masonry("#section-of-artworks", {
                itemSelector: "none",
                columnWidth: ".grid__col-sizer",
                gutter: ".grid__col-gutter",
                stagger: 25,
                percentPosition: true,
            }),
        );
    }, []);

    React.useEffect(() => {
        if (!sectionRef.current) {
            return;
        }

        if (masonry) {
            imagesLoaded(sectionRef.current, function () {
                //@ts-expect-error
                masonry.options.itemSelector = ".artwork-card";

                masonry.reloadItems && masonry.reloadItems();
                masonry.layout && masonry.layout();

                masonry.once &&
                    masonry.once("layoutComplete", function () {
                        sectionRef.current!.style.opacity = "1";
                        sectionRef.current!.style.pointerEvents = "all";
                        sectionRef.current!.style.touchAction = "auto";
                        loadingIndicatorRef.current!.style.opacity = "0";

                        loadingIndicatorRef.current!.addEventListener(
                            "transitionend",
                            () => {
                                loadingIndicatorRef.current!.setAttribute(
                                    "hidden",
                                    "true",
                                );
                            },
                            {
                                once: true,
                            },
                        );

                        setIsLayoutFinished(true);
                    });
            });
        }
    }, [masonry]);

    return (
        <React.Fragment>
            <div
                ref={loadingIndicatorRef}
                className="transition-[opacity] duration-500 pointer-events-none touch-none top-0 left-0 absolute w-full grid place-items-center min-h-[80dvh]"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="w-8 h-8 rounded-full border-2 border-accent border-r-foreground/20 animate-spin" />
                    Loading... Please Wait
                </div>
            </div>
            <section
                id="section-of-artworks"
                className="px-2 min-h-screen transition-[opacity] will-change-[opacity] duration-500 relative overflow-x-clip"
                ref={sectionRef}
                style={{
                    opacity: "0",
                    pointerEvents: "none",
                    touchAction: "none",
                }}
            >
                <h2 className="sr-only">Section of Artworks</h2>

                <div className="grid__col-sizer w-full xs:w-[47.5%] md:w-[31.65%] xl:w-[23.0875%]"></div>
                <div className="grid__col-gutter w-[5%] md:w-[2.5%]"></div>

                {artworks.map((item, idx) => {
                    return (
                        <ArtworkCard
                            idx={idx}
                            key={item.title}
                            masonry={masonry}
                            artworkData={item}
                            isLayoutComplete={isLayoutFinished}
                        />
                    );
                })}
            </section>
        </React.Fragment>
    );
};

SectionOfArtworks.displayName = "SectionofArtworks";

export default SectionOfArtworks;
