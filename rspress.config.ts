import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginShiki } from '@rspress/plugin-shiki';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  base: '/',
  title: 'TypeScript HandBook',
  description: 'TS HandBook 中文版',
  icon: '/icon_handbook.svg',
  logo: {
    light: '/icon_handbook.svg',
    dark: '/icon_handbook.svg',
  },
  ssg: true,
  plugins: [<any>pluginShiki()],
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/bigbigDreamer/ts-handbook' },
    ],
  },
});
