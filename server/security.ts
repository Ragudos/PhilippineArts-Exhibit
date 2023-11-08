/* eslint-disable quotes */

import helmet from "helmet";

const connectSrc = process.env.NODE_ENV == "development" ? "ws:" : null;

export const security = helmet({
    contentSecurityPolicy: {
        directives: {
            "connect-src": [connectSrc as "ws:", "'self'"].filter(Boolean),
            "script-src": [
                "'self'",
                "'strict-dynamic'",
                (_, res) => {
                    // @ts-expect-error Response.locals does not exist on Helmet's type of response.
                    return `'nonce-${res.locals.cspNonce}'`;
                },
            ],
            "font-src": ["'self'", "https://fonts.gstatic.com"],
            "media-src": [
                "'self'",
                "data:",
                "blob:",
                "https://openaccess-api.clevelandart.org",
                "https://openaccess-cdn.clevelandart.org",
            ],
            "img-src": [
                "'self'",
                "data:",
                "blob:",
                "https://openaccess-cdn.clevelandart.org",
            ],
        },
    },
});
