export default {
    title: 'Docker Handbook',
    description: 'Docker Handbook',
    base : '/docker/',
    lastUpdated: true,
    lang: 'en-US',
    cleanUrls: true,

    themeConfig: {
      siteTitle: 'Docker Handbook',
      logo : '/logo.png',

      algolia: {
        appId: '9O9QAU72UI',
        apiKey: '03fb7c8b14ef1a61c79b3ae737f2f4e0',
        indexName: 'ker'
      },

      editLink: {
        pattern: 'https://github.com/tabpole/docker/tree/main/docs/:path',
        text: 'Edit this page on GitHub'
      },

      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Documentation', link: 'getting_started/overview.md' },
        { text: 'Support', link: 'https://www.buymeacoffee.com/alpondith'},
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/tabpole/docker-handbook' },
      ],

      sidebar: [
        {
          text: 'Getting Started',
          // collapsed: false,
          items: [
            { text: 'Overview', link: 'getting_started/overview.md' },
            { text: 'Install on Linux', link: 'getting_started/install_on_linux.md' },
            { text: 'Remove from Linux', link: 'getting_started/uninstall_from_linux.md' },
          ],
        },
        {
          text: 'Concepts',
          // collapsed: false,
          items: [
            { text: 'Image', link: 'concepts/image.md' },
            { text: 'Container', link: 'concepts/container.md' },
            { text: 'Image vs Container', link: 'concepts/image_vs_container.md' },
            { text: 'Volume', link: 'concepts/volume.md' },
            { text: 'Registry', link: 'concepts/registry.md' },
          ],
        },
        {
          text: 'Examples',
          // collapsed: false,
          items: [
            { 
              text: 'Hello World',
              link: 'examples/hello_world.md',
            },
            { 
              text: 'Ubuntu',
              link: 'examples/ubuntu.md',
            },
          ],
        },
        {
          text: 'Resources',
          // collapsed: false,
          items: [
            { text: 'Playlists', link: 'resources/playlist.md' },
            { text: 'Tools', link: 'resources/tool.md' },
          ],
        },
      ],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023 @tabpole'
      }
    },
  }