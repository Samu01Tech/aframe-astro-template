import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";

import commonjs from "@rollup/plugin-commonjs";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs()],
  vite: {
    plugins: [commonjs()],
  },
});
