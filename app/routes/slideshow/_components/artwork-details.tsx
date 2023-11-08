import { Button } from "@/components/ui/button";
import type { Artwork } from "@/types";
import React from "react";

import themeIcons from "@/assets/theme-icons.svg";

export const ArtworkDetails: React.FC<{
    artwork: Artwork;
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
    artwork: { title, category, description, artist, techniques, materials },
    setIsPaused,
}) => {
    const [didAvifFail, setDidAvifFail] = React.useState(false);
    const [didWebpFail, setDidWebpFail] = React.useState(false);
    const srcSets = React.useMemo(() => {
        if (didAvifFail) {
            return !didWebpFail
                ? ` /assets/${category}/250/${title.toLowerCase()}.webp 250w,
                            /assets/${category}/500/${title.toLowerCase()}.webp 500w,
                            /assets/${category}/1000/${title.toLowerCase()}.webp 1000w,
                            /assets/${category}/1500/${title.toLowerCase()}.webp 1500w,
                            /assets/${category}/2000/${title.toLowerCase()}.webp 2000w`
                : `/assets/${category}/250/${title.toLowerCase()}.jpg 250w,
                            /assets/${category}/500/${title.toLowerCase()}.jpg 500w,
                            /assets/${category}/1000/${title.toLowerCase()}.jpg 1000w,
                            /assets/${category}/1500/${title.toLowerCase()}.jpg 1500w,
                            /assets/${category}/2000/${title.toLowerCase()}.jpg 2000w`;
        } else {
            return `/assets/${category}/250/${title.toLowerCase()}.avif 250w,
                        /assets/${category}/500/${title.toLowerCase()}.avif 500w,
                        /assets/${category}/1000/${title.toLowerCase()}.avif 1000w,
                        /assets/${category}/1500/${title.toLowerCase()}.avif 1500w,
                        /assets/${category}/2000/${title.toLowerCase()}.avif 2000w`;
        }
    }, [didAvifFail, didWebpFail, title, category]);

    const dialogRef = React.useRef<HTMLDialogElement>(null);

    const handleClose = React.useCallback(
        (e: MouseEvent) => {
            if (e.target == dialogRef.current) {
                dialogRef.current!.close();
                setIsPaused(false);
            }
        },
        [setIsPaused],
    );

    React.useEffect(() => {
        if (!dialogRef.current) {
            return;
        }

        dialogRef.current.addEventListener("click", handleClose);

        return () => {
            dialogRef.current?.removeEventListener("click", handleClose);
        };
    }, [handleClose]);

    const splitDesc = description.split(".");

    return (
        <React.Fragment>
            <dialog className="bg-transparent" ref={dialogRef}>
                <div className="flex flex-col gap-2 bg-transparent">
                    <div className="flex justify-end px-1 pt-2">
                        <Button
                            colors="ghost"
                            size="sm"
                            className="font-semibold gap-2"
                            onClick={() => {
                                setIsPaused(false);

                                dialogRef.current!.close();
                            }}
                        >
                            <svg className="own-width w-4 h-4">
                                <use href={themeIcons + "#x-icon-small"}></use>
                            </svg>
                            CLOSE
                        </Button>
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
                        alt={description}
                        className="w-full max-w-full h-fit max-h-[42.5rem]"
                        src={`/assets/${category}/10/${title.toLowerCase()}.jpg`}
                        sizes="(min-width: 520px) 500px, (min-width: 768px) 1000px, (min-width: 1280px) 1500px, (min-width: 2000px) 2000px, 250px"
                    />
                </div>
            </dialog>

            <article className="justify-center container flex-1 flex flex-col gap-12 xl:gap-24 md:flex-row pb-24 animate-fade duration-500">
                <div className="w-fit h-fit flex items-start relative">
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
                        alt={description}
                        className="w-full max-w-full h-fit max-h-[42.5rem]"
                        sizes="(min-width: 520px) 500px, (min-width: 768px) 1000px, (min-width: 1280px) 1500px, (min-width: 2000px) 2000px, 250px"
                        loading="eager"
                    />

                    <Button
                        colors="secondary"
                        size="sm"
                        className="absolute bottom-1 left-1 font-semibold gap-2"
                        onClick={() => {
                            setIsPaused(true);

                            dialogRef.current!.showModal();
                        }}
                    >
                        <svg className="own-width w-4 h-4">
                            <use href={themeIcons + "#expand-small"}></use>
                        </svg>
                        Expand image
                    </Button>
                </div>
                <div className="flex flex-col gap-4 xl:gap-8 items-center md:w-[45%] xl:w-[35%]">
                    <div className="w-full">
                        <h1>
                            <strong className="font-semibold">{title}</strong>
                        </h1>
                        <div>{artist}</div>
                    </div>

                    <p className="text-justify">
                        {splitDesc.map((text, idx) => {
                            if (idx != splitDesc.length - 1) {
                                return (
                                    <React.Fragment key={idx}>
                                        {text}.
                                        {idx > 0 && idx % 3 == 0 ? (
                                            <React.Fragment>
                                                <br />
                                                <br />
                                            </React.Fragment>
                                        ) : undefined}
                                    </React.Fragment>
                                );
                            }
                        })}
                    </p>

                    <hr className="bg-foreground w-full" />

                    <section className="flex flex-col gap-2 xl:gap-4 w-full">
                        <h2 className="sr-only">Metadata about the artwork</h2>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="h5">Category</div>
                            <small>{category[0].toUpperCase() + category.slice(1)}</small>
                        </div>

                        {techniques && (
                            <div className="w-full flex gap-2 flex-col">
                                <div className="h6 font-medium">
                                    Techinques used
                                </div>
                                <ul className="flex items-center flex-wrap gap-4">
                                    {techniques.map((technique) => (
                                        <li key={technique + title}>
                                            <small>{technique}</small>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {materials && (
                            <div className="w-full flex gap-2 flex-col">
                                <div className="h6 font-medium">
                                    Materials used
                                </div>
                                <ul className="flex items-center flex-wrap gap-4">
                                    {materials.map((material) => (
                                        <li key={material + title}>
                                            <small>{material}</small>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>
                </div>
            </article>
        </React.Fragment>
    );
};
