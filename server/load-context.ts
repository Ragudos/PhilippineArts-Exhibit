import type { GetLoadContextFunction } from "@remix-run/express";

export const getLoadContext: GetLoadContextFunction = (_req, res) => {
    return {
        cspNonce: res.locals.cspNonce,
    };
};
