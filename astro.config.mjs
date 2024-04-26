import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: "https://porfolio.v2.github.io",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt-br"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: "server",
  adapter: vercel(),
});
