import * as path from 'path';
import { defineConfig } from 'rspress/config';

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
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
    lastUpdated: true
  },
});
