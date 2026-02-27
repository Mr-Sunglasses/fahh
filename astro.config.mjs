import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";

export default defineConfig({
  integrations: [
    AstroPWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{html,js,css,mp3}"],
      },
      manifest: {
        name: "Fahh 💨",
        short_name: "Fahh",
        description: "Click to Fahh 💨",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
      },
    }),
  ],
});
