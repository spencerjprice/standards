import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://spencerjprice.github.io',
    base: '/standards',
    publicDir: new URL('./public', import.meta.url).toString(),
});
