module.exports = {
  siteMetadata: {
    title: 'Phucie and Oanh 2020'
  },
  plugins: [
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Phucie and Oanh 2020',
        short_name: 'Phucie and Oanh 2020',
        start_url: '/',
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Calligraffitti`
          },
          {
            family: `Clicker Script`
          },
          {
            family: `Roboto`,
            variants: [`300`, `400`]
          }
        ],
      },
    }
  ]
};
