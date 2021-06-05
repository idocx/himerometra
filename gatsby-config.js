module.exports = {
  pathPrefix: "/himerometra",
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Yuxing Fei - Personal Page`,
    author: `Yuxing Fei`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/md-pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: false,
        gfm: true,
        plugins: [],
      },
    },          
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
  ]
}
