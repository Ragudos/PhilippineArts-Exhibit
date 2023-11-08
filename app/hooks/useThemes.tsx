import React from "react";

type Themes = "light" | "dark" | "system" | null;

export const ThemeCtx = React.createContext<Themes>(null);
export function useThemes() {
    return React.useContext(ThemeCtx);
}
