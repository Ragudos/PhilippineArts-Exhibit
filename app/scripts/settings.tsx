import { UserSettings } from "@/types";
import React from "react";

export function SettingsScript({
    nonce,
    userSettings,
    ...props
}: React.ScriptHTMLAttributes<HTMLScriptElement> & {
    userSettings?: UserSettings;
}) {
    React.useEffect(() => {
        if (document) {
            document.documentElement.classList.remove("outline", "solid");

            if (
                userSettings?.iconType == "solid" ||
                userSettings?.iconType == "outline"
            ) {
                document.documentElement.classList.add(
                    userSettings?.iconType || "solid",
                );
            } else {
                document.documentElement.classList.add("solid");
            }
        }
    }, [userSettings?.iconType]);

    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
            let preferredIcon = "${userSettings?.iconType}";

            document.documentElement.classList.remove("outline", "solid");

            if (preferredIcon == "solid" || preferredIcon == "outline") {
                document.documentElement.classList.add("${userSettings?.iconType}");
            } else {
                document.documentElement.classList.add("solid");
            }
        `,
            }}
            nonce={nonce}
            {...props}
        ></script>
    );
}
