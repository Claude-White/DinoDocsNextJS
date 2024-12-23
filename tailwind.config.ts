import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [daisyui, typography, forms],
} satisfies Config;
