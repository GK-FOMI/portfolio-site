import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";

export default defineConfig({
  integrations: [
    sanity({
      projectId: "7eimp9kv",
      dataset: "production",
      useCdn: false,
      studioUrl: "http://localhost:3333",
    }),
  ],
});