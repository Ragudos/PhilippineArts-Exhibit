import {
    Links,
    Meta,
    Scripts,
    isRouteErrorResponse,
    useRouteError,
} from "@remix-run/react";
import { useNonce } from "./hooks/useNonce";

export function ErrorBoundary() {
    const error = useRouteError();
    const nonce = useNonce();

    return (
        <html>
            <head>
                <title>Oops!</title>
                <meta name="robots" content="nofollow noindex"></meta>
                <Meta />
                <Links />
            </head>
            <body>
                <h1>
                    {isRouteErrorResponse(error)
                        ? `${error.status} ${error.statusText}`
                        : error instanceof Error
                        ? error.message
                        : "Unknown Error"}
                </h1>
                <Scripts nonce={nonce} />
            </body>
        </html>
    );
}
