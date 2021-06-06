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
        name: `markdown-pages`,
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
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
