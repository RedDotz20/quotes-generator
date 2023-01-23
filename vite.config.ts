import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://reddotz20.github.io/Quotes-Generator/",
	plugins: [react()],
});
