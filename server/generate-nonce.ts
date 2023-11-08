import type { Request, Response, NextFunction } from "express";

import crypto from "node:crypto";

export function generateNonce(
    _req: Request,
    response: Response,
    next: NextFunction,
) {
    const nonce = crypto.randomBytes(16).toString("hex");

    response.locals["cspNonce"] = nonce;
    next();
}
