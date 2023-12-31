import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://tuxnest.vercel.app/",
  integrations: [
    starlight({
      title: "tuxnest",
      social: {
        github: "https://github.com/Jak2k/tuxnest",
      },
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        de: {
          label: "Deutsch",
          lang: "de",
        }
      },
      sidebar: [
        {
          label: "Introduction",
          autogenerate: {
            directory: "1_introduction"
          },
          translations: {
            "de": "Einführung"
          }
        }
      ]
    }),
  ],
});
