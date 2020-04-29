require("dotenv").config({
    path: `crystallize-config`,
})

module.exports = {
    siteMetadata: {
        title: `Crystallize-orn-vipps`,
        description: `Headless ecommerce running on Crystallize and Gatsby with hopefully vipps express`,
        author: `@webmaeistro`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-react-head`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
              fonts: [
                {
                  family: `Oswald`,
                  subsets: [`latin`],
                },
                {
                  family: `Open Sans`,
                  variants: [`400`, `700`]
                },
              ],
            },
          },
        {
            resolve: `gatsby-plugin-react-helmet-canonical-urls`,
            options: {
              siteUrl: `https://crystallize-gatsby-ornforlag.now.sh`,
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
              custom: {
                families: ["Eina, Eina-SemiBold"],
                urls: ["/fonts/fonts.css"]
              }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics-gdpr`,
            options: {
              // The property ID; the tracking code won't be generated without it.
              trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID", 
              // Optional parameter (default false) - Enable analytics in development mode.
              enableDevelopment: true, // default false
              // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
              anonymizeIP: true,
              // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
              autoStartWithCookiesEnabled: false, 
              // Optional parameter - Configuration for react-ga and google analytics 
              reactGaOptions: {
                  debug: true,
                  gaOptions: {
                      sampleRate: 10
                  }
              }
            },
          },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-plugin-module-resolver",
            options: {
                root: "./src", // <- will be used as a root dir
                aliases: {
                    components: "./components", // <- will become ./src/components
                    ui: "./ui", // <- will become ./src/components
                    utils: "./utils", // <- will become ./src/components
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ornforlag`,
                short_name: `orn`,
                start_url: `/`,
                icon: `src/images/crystallize-icon.png`,
                background_color: `#f3f4f6`,
                theme_color: `#B7E2E4`,
                display: `standalone`,
            },
        },
        {
            resolve: `gatsby-source-graphql`,
            options: {
                // This type will contain remote schema Query type
                typeName: `CRYSTALLIZE`,
                // This is the field under which it's accessible
                fieldName: `crystallize`,
                // URL to query from
                url: `${process.env.CRYSTALLIZE_API_BASE}/${process.env.CRYSTALLIZE_TENANT_ID}/catalogue`,
            },
        },
        "gatsby-plugin-styled-components",
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
         `gatsby-plugin-offline`,
    ],
}