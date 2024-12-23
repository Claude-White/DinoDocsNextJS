import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['"Inter Variable"', "sans-serif"],
            },
            fontSize: {
                h1: "3rem",
                h2: "2.5rem",
                h3: "2.25rem",
                h4: "2rem",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [daisyui, typography],
    daisyui: {
        themes: [
            {
                black: {
                    ...require("daisyui/src/theming/themes")["black"],
                    "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0.25rem", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "1rem", // border radius rounded-badge utility class, used in badges and similar
                    "--animation-btn": "0.25s", // duration of animation when you click on button
                    "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    "--btn-focus-scale": "0.98", // scale transform of button when you focus on it
                    "--border-btn": "2px", // border width of buttons
                    "--tab-border": "2px", // border width of tabs
                    "--tab-radius": "0.25rem", // border radius of tabs
                },
            },
        ],
    },
} satisfies Config;
