import React from "react";
import { Video } from "./_components/video.client";
import { MetaFunction } from "@remix-run/react";
import { generateMetadata } from "@/lib/metadata";

export const meta: MetaFunction = () => {
    return generateMetadata({
        title: {
            isAbsolute: false,
            text: "| Trailer",
        },
        description: "A trailer for the art exhibit.",
    });
};

let isHydrating = true;

export default function Trailer() {
    const [isHydrated, setIsHydrated] = React.useState(!isHydrating);

    React.useEffect(() => {
        isHydrating = false;
        setIsHydrated(true);
    }, []);

    return <React.Fragment>{isHydrated && <Video />}</React.Fragment>;
}
