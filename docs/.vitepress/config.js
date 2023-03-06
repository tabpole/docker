export default {
    title: 'Docker Handbook',
    description: 'Docker Handbook',
    base : '/docker-handbook/',
    lastUpdated: true,
    lang: 'en-US',
    cleanUrls: true,

    themeConfig: {
      siteTitle: 'Docker Handbook',
      logo : 'assets/logo.png',

      nav: [
        { text: 'Home', link: '/' },
        { text: 'Documentation', link: 'getting_started/overview.md' },
        { text: 'About', link: '/about' },
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/tabpole/docker-handbook' },
      ],

      sidebar: [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Overview', link: 'getting_started/overview.md' },
            { text: 'Install on Linux', link: 'getting_started/install_on_linux.md' },
            { text: 'Remove from Linux', link: 'getting_started/uninstall_from_linux.md' },
          ],
        },
        {
          text: 'Concepts',
          collapsed: false,
          items: [
            { text: 'Image', link: 'concepts/image.md' },
            { text: 'Container', link: 'concepts/container.md' },
          ],
        },
        {
          text: 'Examples',
          collapsed: false,
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
      ],
    },
  }