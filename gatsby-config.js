module.exports = {
  pathPrefix: "/my-blog",
};
module.exports = {
  siteMetadata: {
    title: `Blog for tutorial`,
    siteUrl: `https://thuanqh.github.io/my-blog`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        prismPreset: `prism-okadia`,
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        mdx: false,
        basePath: `/notes`,
      },
    },
  ],
};
