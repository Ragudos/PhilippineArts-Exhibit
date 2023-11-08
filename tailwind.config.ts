import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1440px",
            },
        },
        extend: {
            screens: {
                xs: "520px",
                md: "820px",
            },
            willChange: {
                colors: "color, background-color, opacity, box-shadow",
            },

            fontFamily: {
                cursive: '"Dancing Script", serif',
            },

            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                success: {
                    DEFAULT: "hsl(var(--success))",
                    foreground: "hsl(var(--success-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },

            keyframes: {
                shimmer: {
                    to: {
                        transform: "translateX(100%)",
                    },
                },
                fade: {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
            },

            animation: {
                shimmer: "shimmer 2000ms linear infinite",
                fade: "fade 500ms linear forwards",
            },
        },
    },
    plugins: [],
} satisfies Config;
