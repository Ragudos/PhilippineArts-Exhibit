import React from "react";

export const NonceCtx = React.createContext("");

export function useNonce() {
    return React.useContext(NonceCtx);
}
