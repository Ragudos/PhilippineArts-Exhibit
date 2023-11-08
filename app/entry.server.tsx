/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import { PassThrough } from "node:stream";

import type { AppLoadContext, EntryContext } from "@remix-run/node";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { NonceCtx } from "./hooks/useNonce";

const ABORT_DELAY = 5_000;

export default async function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
    loadContext: AppLoadContext,
) {
    const callbackName = isbot(request.headers.get("user-agent"))
        ? "onAllReady"
        : "onShellReady";

    return new Promise((resolve, reject) => {
        const { pipe, abort } = renderToPipeableStream(
            <NonceCtx.Provider
                value={
                    loadContext?.cspNonce
                        ? (loadContext.cspNonce as string)
                        : ""
                }
            >
                <RemixServer
                    abortDelay={ABORT_DELAY}
                    context={remixContext}
                    url={request.url}
                />
            </NonceCtx.Provider>,
            {
                [callbackName]() {
                    const body = new PassThrough();

                    responseHeaders.set("Content-Type", "text/html");

                    resolve(
                        new Response(createReadableStreamFromReadable(body), {
                            headers: responseHeaders,
                            status: responseStatusCode,
                        }),
                    );

                    pipe(body);
                },
                onShellError(error: unknown) {
                    reject(error);
                },
                onError(error: unknown) {
                    responseStatusCode = 500;
                    console.error(error);
                },
            },
        );

        setTimeout(abort, ABORT_DELAY);
    });
}