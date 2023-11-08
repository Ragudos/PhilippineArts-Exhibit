import { createCookie } from "@remix-run/node";

export const themePrefs = createCookie("themes", {
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60,
});

export const userSettings = createCookie("user-settings", {
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60,
});
