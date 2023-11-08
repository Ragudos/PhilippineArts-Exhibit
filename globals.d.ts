declare global {
    interface Window {
        ENV?: {
            NODE_ENV: "development" | "production" | "test";
        };
    }
}

export {};
