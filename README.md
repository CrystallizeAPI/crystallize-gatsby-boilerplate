# Gatsby-starter-Crystallize 

[![React: latest][0]][1] [![Gatsby: latest][2]][3]

The starter and theme you need to get a frontend up and running on the
[headless ecommerce][8] & GraphQL based [product Information Management][9]
service [Crystallize][10]. [React/graphql commerce with Gatsby][11].

This starter with crystallize theme is a great starting point when building [React
ecommerce][11] experiences with [frontend performance][12] in focus. You can
have rich ecommerce content with the super structured [PIM][13] engine in
Crystallize powering your product catalogue.

Fast frontend performance delivers a better ecommerce experience and is a key
ingredient in the [ecommerce SEO checklist][14]. [Rich content driven ecommerce
experiences][15] builds the foundation for a [content strategy for exponential
growth marketing][16].

Check it out, the starter and theme is Open Source and MIT licensed.

## Getting Started

## 🚀 Quick start

  1.  **Setup this site.**

      Use the Gatsby CLI to Clone this site.

      ```sh
      # Clone this Repositories
      gatsby new crystallize-project https://github.com/CrystallizeAPI/crystallize-gatsby-boilerplate.git
      ```

  1.  **Setup your API Dash**

     goto crystallize.com register a user (its free up to a sertan point see pricing) and goto security tab and copy your tenant name
example:
      ```
      tenant=orn-forlag
      ```

  1.  **Start developing.**

      Navigate into your new site’s directory and start it up.

      ```sh
      cd crystallize-projhect
      yarn / npm install
      
      ```

  
  2.  **Open the source code and start editing!**

      Your site is now running at `http://localhost:8000`!

      _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

      Open the `crystallize-project` directory in your code editor of choice and make sure you'r `gatsby.config` has the following lines (among others):

```
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
```

3. create a file named `crysallize.config` in the root of your project and copy paste the following:

```
CRYSTALLIZE_API_BASE=https://api.crystallize.com
CRYSTALLIZE_TENANT_ID=orn-forlag
```

4.
Run the following in the root of your project:

```
gatsby develop
```

  ## 🎓 Learning Gatsby

  Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

  - **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

  - **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

 
  <!-- AUTO-GENERATED-CONTENT:END -->

## App Structure

### gatsby-source-GraphQL engoush said 

We use the `src/` directory to hold the actual entry pages
related to query result in `gatsby-node.js`.

Styled components and UI.

NB! react-framework orientated more then traditional gatsby file struckture


 ## 💫 Deploy
 
There are multiple alternatives for deployments, check out one of the ones below:

  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/CrystallizeAPI/crystallize-gatsby-boilerplate.git)



### Deploying with [Vercel Now][19]

- Register a Vercel account
- Install Vercel Now: `npm i -g now`
- Run `now`


[0]: https://img.shields.io/badge/react-latest-44cc11.svg?style=flat-square
[1]: https://github.com/facebook/react
[2]: https://img.shields.io/badge/next-latest-44cc11.svg?style=flat-square
[3]: https://www.gatsbyjs.org/
[4]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[5]: https://github.com/prettier/prettier
[6]: https://img.shields.io/badge/code_linter-eslint-463fd4.svg?style=flat-square
[7]: https://github.com/prettier/prettier
[8]: https://crystallize.com/product
[9]: https://crystallize.com/product/product-information-management
[10]: https://crystallize.com
[11]: https://crystallize.com/developers
[12]: https://crystallize.com/blog/frontend-performance-measuring-kpis
[13]: https://crystallize.com/product/product-information-management
[14]: https://crystallize.com/blog/ecommerce-seo-checklist
[15]: https://crystallize.com/blog/content-rich-storytelling-makes-juicy-ecommerce
[16]: https://snowball.digital/blog/content-strategy-for-exponential-growth-marketing
[17]: https://github.com/crystallizeapi/crystallize-cli
[18]: https://www.netlify.com/
[19]: https://vercel.com
