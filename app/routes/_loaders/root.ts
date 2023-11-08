import type { Artwork } from "@/types";
import type { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
    const artworks = await fetch(
        new URL(request.url).origin + "/assets/art.json",
        {
            method: "GET",
            mode: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
        },
    );

    return artworks.json() as Promise<Artwork[]>;
}
