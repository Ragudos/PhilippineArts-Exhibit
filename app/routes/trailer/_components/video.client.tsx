import { Button } from "@/components/ui/button";
import React from "react";

import themeIcons from "@/assets/theme-icons.svg";

export const Video: React.FC = React.memo(() => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [didError, setDidError] = React.useState(false);

    const [videoProgress, setVideoProgress] = React.useState(0);
    const [isScrubbing, setIsScrubbing] = React.useState(false);
    const [isAudioScrubbing, setIsAudioScrubbing] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(true);
    const [volumePercentage, setVolumePercentage] = React.useState(100);
    const [isMuted, setIsMuted] = React.useState(false);

    const [isFullScreen, setIsFullScreen] = React.useState(false);

    const videoRef = React.useRef<HTMLVideoElement>(null);
    const timelineRef = React.useRef<HTMLDivElement>(null);
    const volumeRef = React.useRef<HTMLDivElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const currentTimeInVideo = React.useMemo(() => {
        if (!videoRef.current) {
            return;
        }

        if (videoRef.current.currentTime > 3600) {
            const hour = Math.floor(videoRef.current.currentTime / 3600);
            const minutes = Math.floor(videoRef.current.currentTime % 3600);
            const seconds = Math.floor(minutes % 60);

            return {
                hour,
                minutes,
                seconds,
            };
        } else if (videoRef.current.currentTime > 60) {
            const minutes = Math.floor(videoRef.current.currentTime / 60);
            const seconds = Math.floor(videoRef.current.currentTime % 60);

            return {
                minutes,
                seconds,
            };
        } else {
            return {
                seconds: Math.floor(videoRef.current.currentTime),
            };
        }
    }, [videoRef.current, videoProgress]);

    const durationInVideo = React.useMemo(() => {
        if (!videoRef.current) {
            return;
        }

        if (videoRef.current.duration > 3600) {
            const hour = Math.floor(videoRef.current.duration / 3600);
            const minutes = Math.floor(videoRef.current.duration % 3600);
            const seconds = Math.floor(minutes % 60);

            return {
                hour,
                minutes,
                seconds,
            };
        } else if (videoRef.current.duration > 60) {
            const minutes = Math.floor(videoRef.current.duration / 60);
            const seconds = Math.floor(videoRef.current.duration % 60);

            return {
                minutes,
                seconds,
            };
        } else {
            return {
                seconds: Math.floor(videoRef.current.duration),
            };
        }
    }, [videoRef.current]);

    const handleTimelineChange = React.useCallback(
        (e: MouseEvent) => {
            if (!isScrubbing) {
                return;
            }

            if (!videoRef.current || !timelineRef.current) {
                return;
            }
            const target = timelineRef.current;
            const rect = target.getBoundingClientRect();
            const percentage =
                Math.min(Math.max(0, e.clientX - rect.x), rect.width) /
                rect.width;
            const progress = percentage * 100;

            setVideoProgress(progress);

            videoRef.current.currentTime =
                percentage * videoRef.current.duration;

            if (videoRef.current.currentTime == videoRef.current.duration) {
                setIsPaused(true);
            }
        },
        [isScrubbing],
    );

    const handleVideoProgress = React.useCallback(
        (_e: Event) => {
            if (isScrubbing || !isLoaded || !videoRef.current) {
                return;
            }

            setVideoProgress(
                (videoRef.current.currentTime / videoRef.current.duration) *
                100,
            );

            if (videoRef.current.currentTime == videoRef.current.duration) {
                setIsPaused(true);
            }
        },
        [isScrubbing, isLoaded],
    );

    const handleChangeTab = React.useCallback(() => {
        setIsScrubbing(false);
    }, []);

    const handleMouseUp = React.useCallback(() => {
        if (!videoRef.current || !timelineRef.current) {
            return;
        }

        setIsScrubbing(false);
        setIsAudioScrubbing(false);

        if (!isPaused) {
            videoRef.current.play();
        }
    }, [isPaused]);

    const handleAudioScrubbing = React.useCallback(
        (e: MouseEvent) => {
            if (!volumeRef.current || !videoRef.current || !isAudioScrubbing) {
                return;
            }

            const target = volumeRef.current;
            const rect = target.getBoundingClientRect();

            if (rect.width == 0) {
                return;
            }

            const percentage =
                Math.min(Math.max(0, e.clientX - rect.x), rect.width) /
                rect.width;
            setVolumePercentage(Math.floor(percentage * 100));
        },
        [isAudioScrubbing],
    );

    const handleFullScreen = React.useCallback(
        (_e: Event) => {
            if (document.fullscreenElement == null) {
                setIsFullScreen(false);
            } else {
                setIsFullScreen(true);
            }
        },
        []
    );

    React.useEffect(() => {
        if (!videoRef.current) {
            return;
        }

        window.addEventListener("mousemove", handleTimelineChange);
        window.addEventListener("mousemove", handleAudioScrubbing);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("visibilitychange", handleChangeTab);
        // for on first page load only
        videoRef.current.addEventListener("timeupdate", handleVideoProgress);

        containerRef.current?.addEventListener("fullscreenchange", handleFullScreen);

        return () => {
            window.removeEventListener("mousemove", handleTimelineChange);
            window.removeEventListener("mousemove", handleAudioScrubbing);
            window.removeEventListener("visibilitychange", handleChangeTab);
            window.removeEventListener("mouseup", handleMouseUp);
            videoRef.current?.removeEventListener(
                "timeupdate",
                handleVideoProgress,
            );
            containerRef.current?.removeEventListener(
                "fullscreenchange",
                handleFullScreen,
            );
        };
    }, [
        handleChangeTab,
        handleMouseUp,
        handleTimelineChange,
        handleVideoProgress,
        handleAudioScrubbing,
        handleFullScreen
    ]);

    React.useEffect(() => {
        if (!videoRef.current) {
            return;
        }

        if (isLoaded) {
            // if the progress was stopped at some point and the page did not refresh but the video reloaded.
            videoRef.current.currentTime =
                (videoProgress / 100) * videoRef.current.duration;
        }
    }, [isLoaded]);

    React.useEffect(() => {
        if (!videoRef.current) {
            return;
        }

        if (isMuted) {
            videoRef.current.volume = 0;

            return;
        }

        videoRef.current.volume = volumePercentage / 100;
    }, [volumePercentage, isMuted]);

    return (
        <div
            id="video-player"
            className="aspect-video group bg-black relative border-2 shadow-lg max-h-[40rem] mx-auto"
            ref={containerRef}
        >
            <video
                onLoadedData={() => {
                    setIsLoaded(true);
                }}
                onError={() => {
                    setDidError(true);
                }}
                ref={videoRef}
                className="w-full h-full object-contain"
                lang="ph"
                onClick={() => {
                    if (isPaused) {
                        setIsPaused(false);
                        videoRef.current!.play();
                    } else {
                        setIsPaused(true);
                        videoRef.current!.pause();
                    }
                }}
            >
                <source src="/assets/videos/trailer.mp4" type="video/mp4" />
            </video>

            {isLoaded && !didError && (
                <div
                    className="text-white px-4 h-[25%] pointer-events-none touch-none flex items-end bg-gradient-to-t from-black/50 to-transparent absolute bottom-0 opacity-0 group-hover:opacity-100 duration-500 transition-[opacity] will-change-[opacity] left-0 w-full"
                    style={isPaused || isScrubbing ? { opacity: 1 } : undefined}
                >
                    <div className="flex flex-col w-full h-12 pointer-events-auto touch-auto">
                        <div
                            ref={timelineRef}
                            className="group/timeline hover:h-[0.375rem] transition-[height] will-change-[height] relative w-full h-1 bg-muted cursor-pointer"
                            style={
                                isScrubbing ? { height: "0.375rem" } : undefined
                            }
                            onMouseDown={(e) => {
                                if (
                                    !videoRef.current ||
                                    !timelineRef.current ||
                                    isScrubbing
                                ) {
                                    return;
                                }

                                const target = timelineRef.current;
                                const rect = target.getBoundingClientRect();
                                const percentage =
                                    Math.min(
                                        Math.max(0, e.clientX - rect.x),
                                        rect.width,
                                    ) / rect.width;

                                setVideoProgress(percentage * 100);
                                setIsScrubbing(e.buttons == 1);

                                setIsPaused(videoRef.current.paused);
                                videoRef.current.pause();

                                videoRef.current.currentTime =
                                    percentage * videoRef.current.duration;
                            }}
                            aria-valuemax={videoRef.current!.duration}
                            aria-valuenow={
                                +videoRef.current!.currentTime.toFixed(2)
                            }
                            aria-label="Progress indicator of the video"
                            aria-valuetext={`${currentTimeInVideo?.hour
                                ? currentTimeInVideo.hour + " hour/s "
                                : ""
                                }${currentTimeInVideo?.minutes
                                    ? currentTimeInVideo.minutes + " minute/s "
                                    : ""
                                }${currentTimeInVideo?.seconds + " second/s"}`}
                        >
                            <span
                                className="flex justify-end items-center bg-red-600 will-change-[width] h-full absolute left-0 top-0"
                                style={{ width: `${videoProgress}%` }}
                            >
                                <span
                                    className="-mr-1 group-hover/timeline:scale-100 rounded-full h-[200%] aspect-square bg-inherit scale-0 transition-transform will-change-transform duration-100"
                                    style={
                                        isScrubbing
                                            ? { transform: "scale(1)" }
                                            : undefined
                                    }
                                />
                            </span>
                        </div>

                        <div className="flex justify-between items-center gap-4 h-[90%] px-2">
                            <div className="flex items-center gap-2">
                                <Button
                                    size="icon"
                                    colors="ghost"
                                    className="p-0 text-inherit"
                                    onClick={() => {
                                        setIsPaused((p) => {
                                            if (p) {
                                                videoRef.current!.play();
                                            } else {
                                                videoRef.current!.pause();
                                            }

                                            return !p;
                                        });
                                    }}
                                >
                                    {isPaused && (
                                        <svg className="own-width w-5 h-5">
                                            <use
                                                href={
                                                    themeIcons + "#play-small"
                                                }
                                            ></use>
                                        </svg>
                                    )}

                                    {!isPaused && (
                                        <svg className="own-width w-5 h-5">
                                            <use
                                                href={
                                                    themeIcons + "#pause-small"
                                                }
                                            ></use>
                                        </svg>
                                    )}
                                </Button>

                                <div className="group/volume flex gap-2 items-center">
                                    <Button
                                        size="icon"
                                        colors="ghost"
                                        className="p-0 text-inherit"
                                        onClick={() => {
                                            setIsMuted((p) => {
                                                return !p;
                                            });

                                            if (
                                                !isMuted &&
                                                volumePercentage == 0
                                            ) {
                                                setVolumePercentage(100);
                                                setIsMuted(false);
                                            }
                                        }}
                                    >
                                        {(isMuted || volumePercentage == 0) && (
                                            <svg className="own-width w-5 h-5">
                                                <use
                                                    href={
                                                        themeIcons +
                                                        "#muted-speaker-small"
                                                    }
                                                ></use>
                                            </svg>
                                        )}

                                        {!isMuted && volumePercentage > 0 && (
                                            <svg className="own-width w-5 h-5">
                                                <use
                                                    href={
                                                        themeIcons +
                                                        "#speaker-small"
                                                    }
                                                ></use>
                                            </svg>
                                        )}
                                    </Button>

                                    <div
                                        ref={volumeRef}
                                        className="bg-muted w-0 group/volumeslider hover:h-[0.375rem] group-hover/volume:w-16 h-1 relative will-change-[width,height] cursor-pointer"
                                        style={
                                            isAudioScrubbing
                                                ? {
                                                    height: "0.375rem",
                                                    width: "4rem",
                                                }
                                                : undefined
                                        }
                                        aria-valuemax={100}
                                        aria-valuenow={volumePercentage}
                                        aria-valuetext={`The volume of the video is ${volumePercentage}% loud.`}
                                        aria-label="The percentage of the video's base loudness"
                                        onMouseDown={(e) => {
                                            setIsMuted(false);

                                            if (
                                                !volumeRef.current ||
                                                !videoRef.current ||
                                                isAudioScrubbing
                                            ) {
                                                return;
                                            }

                                            const target = volumeRef.current;
                                            const rect =
                                                target.getBoundingClientRect();
                                            const percentage =
                                                Math.min(
                                                    Math.max(
                                                        0,
                                                        e.clientX - rect.x,
                                                    ),
                                                    rect.width,
                                                ) / rect.width;

                                            setVolumePercentage(
                                                Math.floor(percentage * 100),
                                            );
                                            setIsAudioScrubbing(e.buttons == 1);

                                            videoRef.current.volume =
                                                +percentage.toFixed(2);
                                        }}
                                    >
                                        <div
                                            className="h-full bg-white absolute left-0 top-0 flex justify-end items-center w-full"
                                            style={{
                                                width: `${isMuted
                                                    ? 0
                                                    : volumePercentage
                                                    }%`,
                                            }}
                                        >
                                            <div
                                                className="h-[200%] -mr-1 bg-inherit rounded-full aspect-square group-hover/volumeslider:scale-100 scale-0 will-change-transform"
                                                style={
                                                    isAudioScrubbing
                                                        ? {
                                                            transform:
                                                                "scale(1)",
                                                        }
                                                        : undefined
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                <small aria-label="The current time in the video being shown over the total duration">
                                    {currentTimeInVideo?.hour != undefined
                                        ? currentTimeInVideo.hour + ":"
                                        : undefined}
                                    {(currentTimeInVideo?.minutes != undefined
                                        ? currentTimeInVideo.minutes
                                        : 0) + ":"}
                                    {currentTimeInVideo?.seconds != undefined
                                        ? currentTimeInVideo.seconds < 10
                                            ? "0" + currentTimeInVideo.seconds
                                            : currentTimeInVideo.seconds
                                        : undefined}{" "}
                                    /{" "}
                                    {durationInVideo?.hour != undefined
                                        ? durationInVideo.hour + ":"
                                        : undefined}
                                    {(durationInVideo?.minutes != undefined
                                        ? durationInVideo.minutes
                                        : 0) + ":"}
                                    {durationInVideo?.seconds != undefined
                                        ? durationInVideo.seconds < 10
                                            ? "0" + durationInVideo?.seconds
                                            : durationInVideo?.seconds
                                        : undefined}
                                </small>
                            </div>

                            <div>
                                <Button
                                    size="icon"
                                    colors="ghost"
                                    className="p-0 text-inherit"
                                    onClick={() => {
                                        if (!containerRef.current) {
                                            return;
                                        }

                                        if (!isFullScreen) {
                                            containerRef.current.requestFullscreen();
                                        } else {
                                            document.exitFullscreen();
                                        }
                                    }}
                                >
                                    {!isFullScreen && (
                                        <svg className="own-width w-5 h-5">
                                            <use href={themeIcons + "#expand-small"}></use>
                                        </svg>
                                    )}

                                    {isFullScreen && (
                                        <svg className="own-width w-5 h-5">
                                            <use href={themeIcons + "#collapse-small"}></use>
                                        </svg>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!isLoaded && !didError && (
                <div className="inset-0 m-auto grid place-items-center h-full w-full absolute bg-muted/50 backdrop-blur-md">
                    <div className="flex flex-col gap-2 items-center">
                        <div className="rounded-full w-8 h-8 border-2 border-muted border-r-foreground/20 animate-spin" />
                        <div>Loading... Please wait</div>
                    </div>
                </div>
            )}

            {didError && (
                <div className="inset-0 m-auto grid place-items-center h-full w-full absolute bg-muted/50 backdrop-blur-md">
                    <div className="flex flex-col gap-2 items-center">
                        <div>
                            Something went wrong... Please try refreshing the
                            page
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});
