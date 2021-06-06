module.exports = {
  pathPrefix: process.env.PATH_PREFIX ? process.env.PATH_PREFIX : "/",
  siteMetadata: {
    title: `Yuxing Fei - Personal Page`,
    author: `Yuxing Fei`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `md-pages`,
        path: `${__dirname}/src/md-pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: false,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: []
            },
          },
        ],
      },
    },          
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
  ]
}
