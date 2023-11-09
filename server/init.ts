import express from "express";
import compression from "compression";
import path from "node:path";

import { handleRedirects } from "./redirect";
import { generateNonce } from "./generate-nonce";
import { security } from "./security";
import { logger } from "./logger";

export const app = express();

app.disable("x-powered-by");

// Builds can be cached for a long time since remix fingerprints its assets.
app.use(
    path.join(process.cwd(), "..", "..", "/build"),
    express.static("public/build", {
        immutable: true,
        maxAge: "1y",
    }),
);
// Cache static assets like icon
app.use(
    express.static("public", {
        // 30 minutes
        maxAge: 1000 * 60 * 30,
    }),
);

app.use(handleRedirects);
app.use(generateNonce);
app.use(security);
app.use(logger);
app.use(compression());
