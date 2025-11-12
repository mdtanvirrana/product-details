import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    content: [
        "index.html",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
            },
        },
    },
    plugins: [
        tailwindcss(),
    ],
})
