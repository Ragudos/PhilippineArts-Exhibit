import type { GlobalObjects, Cookies, UserSettings } from "./types";
import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { themePrefs, userSettings } from "./cookies.server";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
    const env = process.env.NODE_ENV;
    const cookies = request.headers.get("Cookie");
    const cookie = {
        themes: (await themePrefs.parse(cookies)) || "system",
    } as Cookies;
    const userSettinsCookie = ((await userSettings.parse(cookies)) ||
        {}) as UserSettings;

    return json({
        ENV: {
            NODE_ENV: env,
        },
        themes: cookie?.themes ?? "system",
        userSettings: userSettinsCookie,
    }) as unknown as GlobalObjects;
};
