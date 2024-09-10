import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://portafolio-lanzerdev.dev/',
  output: 'server',
  adapter: vercel()
})
