module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "tawkto",
  },
  plugins: ["gatsby-plugin-react-helmet",
  {
    resolve: `gatsby-plugin-tawk.to`,
    options: {
      tawkId: "61d857b4f7cf527e84d0f3b3",
      tawkKey: "8d1e25e8cdba06c7f7dfd9f37c8d028988eaa6e5",
      // get this from the tawk script widget
    },
  },
],
};
