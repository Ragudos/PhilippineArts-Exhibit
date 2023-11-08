import React from "react";

export const useMediaQuery: React.FC<{ mediaQuery: string }> = ({
    mediaQuery,
}) => {
    const [matches, setMatches] = React.useState(false);

    const listener = React.useCallback((e: MediaQueryListEvent) => {
        setMatches(e.matches);
    }, []);

    React.useEffect(() => {
        const query = window.matchMedia(mediaQuery);

        setMatches(query.matches);

        query.addEventListener("change", listener);

        return () => {
            query.removeEventListener("change", listener);
        };
    }, [listener]);

    return matches;
};
