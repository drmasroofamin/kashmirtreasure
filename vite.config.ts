import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { BUSINESS } from "./src/config";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "business-meta",
      transformIndexHtml: (html) =>
        html.replaceAll(
          "__BRAND_NAME__",
          BUSINESS.name.replace(
            /[&<>"']/g,
            (character) =>
              ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              })[character]!,
          ),
        ),
    },
  ],
});
