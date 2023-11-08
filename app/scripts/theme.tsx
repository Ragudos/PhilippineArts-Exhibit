import { escapeHTML } from "@/lib/utils";
import { Themes } from "@/types";
import React from "react";

export function ThemeScript({
    nonce,
    themes,
    ...props
}: React.ScriptHTMLAttributes<HTMLScriptElement> & { themes?: Themes }) {
    React.useEffect(() => {
        if (document) {
            const colorScheme = themes;

            if (colorScheme == "system" || !colorScheme) {
                let mediaQuery = window.matchMedia(
                    "(prefers-color-scheme: dark)",
                );

                document.documentElement.classList.remove("dark", "light");

                if (mediaQuery.matches) {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.add("light");
                }
            } else if (colorScheme == "dark" || colorScheme == "light") {
                document.documentElement.classList.remove("dark", "light");
                document.documentElement.classList.add(themes);
            }
        }
    }, [themes]);

    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
            let colorScheme = "${themes ? escapeHTML(themes) : "system"}";

            document.documentElement.classList.remove("dark", "light");

            if (colorScheme == "system" || !colorScheme) {
                let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
                
                if (mediaQuery.matches) {
                    document.documentElement.classList.add("dark");
                }
            } else {
                document.documentElement.classList.add(colorScheme);
            }
        `,
            }}
            nonce={nonce}
            {...props}
        ></script>
    );
}
