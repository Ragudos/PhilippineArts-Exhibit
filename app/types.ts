interface Translation {
    [key: string]: {
        title: string;
        description: string;
    };
}

interface Artwork {
    title: string;
    description: string;
    translations: Translation;
    category: "photography" | "traditional" | "digital";
    artist: string;
    materials: string[];
    techniques?: string[];
}

type Themes = "dark" | "light" | "system" | null;

interface Cookies {
    themes?: Themes;
}

interface UserSettings {
    iconType?: "outline" | "solid";
}

interface GlobalObjects {
    ENV?: {
        NODE_ENV: "development" | "production" | "test";
    };
    themes: Themes;
    userSettings?: UserSettings;
}

export type { Artwork, Cookies, GlobalObjects, Themes, UserSettings };
