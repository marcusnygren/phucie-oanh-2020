module.exports = {
  siteMetadata: {
    title: 'Phucie and Oanh 2020'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Phucie and Oanh 2020',
        short_name: 'Phucie and Oanh 2020',
        start_url: '/',
      }
    }
  ]
};
