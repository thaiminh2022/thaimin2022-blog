import { remarkReadingTime } from "./remake-reading-time.mjs";
import astroRemark from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), react()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
});