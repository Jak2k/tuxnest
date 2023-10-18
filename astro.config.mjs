import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "tuxnest",
      social: {
        github: "https://github.com/Jak2k/tuxnest",
      },
    }),
  ],
});
