import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// const math = require('remark-math')
// const katex = require('rehype-katex')

const config: Config = {
  title: 'Taixr',
  tagline: 'All about AI and XR',
  favicon: 'https://i.taixr.com/logo.jpeg',

  // Set the production url of your site here
  url: 'https://www.taixr.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Taixr', // Usually your GitHub org/user name.
  projectName: 'portal', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: { label: '简体中文' },
      en: { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-K4CD0WFGFG',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/taixr/portal/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/taixr/portal/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'ai, 人工智能, AR, VR, XR, MR, 增强现实，虚拟现实, 混合现实, visionOS, Vision Pro' },
      { name: 'twitter:card', content: 'https://i.taixr.com/logo.jpeg' },
    ],
    // Replace with your project's social card
    image: 'https://i.taixr.com/logo.jpeg',
    navbar: {
      title: 'Taixr',
      logo: {
        alt: 'Taixr, all about AI & AR',
        src: 'https://i.taixr.com/logo.jpeg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'search',
          position: 'right',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right'
        // },
        {
          href: 'https://github.com/taixr',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/category/learn-javascript-with-p5js',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/taixr',
            },
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@taixr',
            },
            {
              label: 'Bilibili',
              href: 'https://space.bilibili.com/1536802703',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/taixr/portal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Taixr`,
    },
    algolia: {
      contextualSearch: true,
      appId: 'PEDULFQVAW',
      apiKey: '127563ccde8202078d4c0e12a66e86ca',
      indexName: 'taixr',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
