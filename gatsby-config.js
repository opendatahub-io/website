module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    title: `OpenDataHub`,
    email: `opendatahub@redhat.com`,
    description: `OpenDataHub`,
    author: `@redhat`,
    repo: `https://gitlab.com/opendatahub`, 
    email_list: `https://lists.opendatahub.io/admin/lists/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown_posts`,
        path: `${__dirname}/src/markdown-posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown_pages`,
        path: `${__dirname}/markdown-pages/docs/`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `YAML_files`,
        path: `${__dirname}/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
