/* eslint-disable react-refresh/only-export-components */

import type { LinksFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";

import globalStyles from "./styles/globals.css";
import { useNonce } from "./hooks/useNonce";

import { ErrorBoundary } from "./error";
import { loader } from "./loader";

import { Header } from "./components/header";
import { cn, escapeHTML } from "./lib/utils";
import { ContextProvider } from "./context-provider";
import { ThemeScript } from "./scripts/theme";
import { SettingsScript } from "./scripts/settings";

export const links: LinksFunction = () => [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
    { rel: "stylesheet", href: globalStyles },
];

export default function App() {
    const nonce = useNonce();
    const { ENV, themes, userSettings } = useLoaderData<typeof loader>();

    return (
        <html
            suppressHydrationWarning
            lang="en"
            className={cn(
                themes == "dark" || themes == "light" ? themes : undefined,
                userSettings?.iconType ?? "solid",
            )}
            data-theme={themes ?? "system"}
        >
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="hsl(20, 22%, 57%)" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/metadata/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/metadata/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/metadata/favicon-16x16.png"
                />
                <link rel="manifest" href="/metadata/site.webmanifest" />
                <Meta />
                <Links />
                <ThemeScript themes={themes} nonce={nonce} />
                <SettingsScript userSettings={userSettings} nonce={nonce} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.ENV = ${JSON.stringify(ENV)};
                        window.themes = "${
                            themes ? escapeHTML(themes) : "system"
                        }"
                        window.settings = ${JSON.stringify(userSettings)}
                        `,
                    }}
                    nonce={nonce}
                    defer
                ></script>
            </head>
            <body>
                <ContextProvider themes={themes}>
                    <Header />
                    <main className="container">
                        <Outlet />
                    </main>
                    <ScrollRestoration nonce={nonce} />
                    <Scripts nonce={nonce} />
                    <LiveReload nonce={nonce} />
                </ContextProvider>
            </body>
        </html>
    );
}

export { ErrorBoundary, loader };
