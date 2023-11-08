import React from "react";
import { Themes } from "./types";
import { ThemeCtx } from "./hooks/useThemes";

interface Props {
    children: React.ReactNode;
    themes: Themes;
}

export const ContextProvider: React.FC<Props> = ({ children, themes }) => {
    return <ThemeCtx.Provider value={themes}>{children}</ThemeCtx.Provider>;
};
