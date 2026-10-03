// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages のプロジェクトサイト(https://awa-lotus.github.io/my-site/)として公開する。
// 独自ドメインに移すときは site をそのドメインにして base を消し、public/CNAME を追加する。
export default defineConfig({
  site: 'https://awa-lotus.github.io',
  base: '/my-site',
  integrations: [sitemap()],
});
