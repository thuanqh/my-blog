module.exports = {
  pathPrefix: "/my-blog",
};
module.exports = {
  siteMetadata: {
    title: `Blog chia kiến thức và kinh nghiệm`,
    siteUrl: `https://thuanqh.github.io/my-blog`,
    author: `Hữu Thuận`,
    description: `Blog chia sẻ kiến thức và kinh nghiệm`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/huuthuan`,
      },
      {
        name: `Github`,
        url: `https://github.com/thuanqh`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: false,
        basePath: `/notes`,
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `vi`,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-intl`,
      options: {
        defaultLocale: `./i18n/react-intl/vi.json`,
      },
    },
  ],
};
