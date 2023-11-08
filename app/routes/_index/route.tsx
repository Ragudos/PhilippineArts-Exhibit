import type { MetaFunction } from "@remix-run/node";
import React from "react";

import { siteConfig } from "@/config/site";
import { generateMetadata } from "@/lib/metadata";

import { loader } from "../_loaders/root";
import { useLoaderData } from "@remix-run/react";

import SectionOfArtworks from "./_components/section-of-artworks.client";

export const meta: MetaFunction = () => {
    return generateMetadata({
        title: siteConfig.title,
        description: "A slideshow of all the artworks.",
    });
};

let isHydrating = true;

export default function Index() {
    const artworks = useLoaderData<typeof loader>();
    const [isHydrated, setIsHydrated] = React.useState(!isHydrating);

    React.useEffect(() => {
        isHydrating = false;
        setIsHydrated(true);
    });

    return (
        <React.Fragment>
            {isHydrated && <SectionOfArtworks artworks={artworks} />}
        </React.Fragment>
    );
}

export { loader };
