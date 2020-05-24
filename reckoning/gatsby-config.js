require("dotenv").config();

const siteMetadata = {
  title: `reckoning.dev`,
  name: `reckoning.dev`,
  siteUrl: `https://blog-temp.netlify.app/`,
  description: `Un blog sobre relaciones humanas. Las más complicadas con diferencia.`,
  hero: {
    heading: `Un blog sobre relaciones humanas. Las más complicadas con diferencia.`,
    maxWidth: 1052,
  },
  social: [
    {
      url: `https://twitter.com/reckoningdev`,
    },
    {
      url: `https://github.com/sadanand-singh`,
    },
    {
      url: `https://www.linkedin.com/in/sadanandsingh/`,
    },
    {
      name: 'stackoverflow',
      url: `https://stackoverflow.com/users/13244305/reckoningdev`,
    },
    {
      url: `https://www.facebook.com/sadanand4singh`,
    }
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      pageLength: 8,
      tags: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'assets',
      path: `${__dirname}/static/`
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `reckoning.dev`,
      short_name: `reckoning`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: "GTM-TN5XB2V",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: true,
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://dev.us4.list-manage.com/subscribe/post?u=c585d707ffc4886d6e72faa29&amp;id=840a133461",
    },
  },
];

module.exports = {
  siteMetadata,
  plugins,
};
