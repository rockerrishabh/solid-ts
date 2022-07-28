import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      injectRegister: "auto",
      manifest: {
        name: "Solid Ts",
        short_name: "Solid Ts",
        display: "standalone",
        scope: "/",
        theme_color: "#FFFFFF",
        background_color: "#FFFFFF",
        start_url: "/",
        icons: [
          {
            src: "/assets/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/assets/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
