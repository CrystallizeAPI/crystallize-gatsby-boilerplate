# Gatsby-theme-Crystallize 
<p align="center">
  <a href="https://gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsbyjs + <a href="https://crystallize.com">Crystallize.com </a> <3 GraphQL
</h1>

<h3 align="center">
  ⚛️ 📄 🚀
</h3>
<h3 align="center">
  Blazing fast Ecomm site in every way that matters!
</h3>
<p align="center">

</p>


### This is a fork with few modules added from work done by Håkon Krogh and the good folks @CrystallizeAPI

Original repo: https://github.com/CrystallizeAPI/crystallize-gatsby-boilerplate

-added keywords to capture gatsbyjs telemetry 
-published to npmjs.
-Gatsbyjs-ified nameing convention: ~crystallize-gatsby-boilerplate~ to gatsby-theme-crystallize 
-published to npmjs as a gatsby-theme 

[![Edit gatsby-starter-crystyallize](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/webmaeistro/gatsby-theme-crystallize/tree/master/?fontsize=14&hidenavigation=1&module=%2Fpackage.json&moduleview=1&theme=dark&view=preview)

  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/webmaeistro/gatsby-theme-crystallize.git)




The theme you need to get a frontend up and running on the
[headless ecommerce][8] & GraphQL based [product Information Management][9]
service [Crystallize][10]. [React/graphql commerce with Gatsby][11].

This  crystallize.com theme is a great starting point when building [React
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

  2.  **Setup your API Dash**

     goto crystallize.com register a user (its free up to a sertan point see pricing) and goto security tab and copy your tenant name
example:
      ```
      tenant=your-tenant
      ```

 3.  **Start developing.**

      Navigate into your new site’s directory and start it up.

      ```sh
      cd crystallize-project
      
      
      ```

  
##  two gatsby-specific things to do first 
 
### A: 

Open the `crystallize-project` directory in your code editor of choice and make sure you'r `gatsby.config` has the following lines (among others):

file: /gatsby.config:
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

### B: 

create a file named `crysallize.config` in the root of your project and copy paste the following lines:

```
CRYSTALLIZE_API_BASE=https://api.crystallize.com
CRYSTALLIZE_TENANT_ID=<your-tenant-from-section-2-above>
```

4.  **fire up your site and customize it!**

Run the following in the root of your project:

```
gatsby develop
```

  ## 🎓 Learning Gatsby

  Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

  - **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

  - **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

 
  <!-- AUTO-GENERATED-CONTENT:END -->


### 🎓 crystallize.com 

https://crystallize.com/learn/developer-guides

**How to Fetch Products**
Products are a core part of the **catalogue**.

Sample Product Query:
graphql:
```
query {
  catalogue(language: "en", path: "/cuddly-toys/kevin-the-kiwi") {
    ...item
    ...product
  }
}
fragment item on Item {
  id
  name
  type
  path
  components {
    name
    type
    meta {
      key
      value
    }
    content {
      ...singleLine
      ...richText
      ...imageContent
      ...paragraphCollection
    }
  }
}
fragment product on Product {
  vatType {
    name
    percent
  }
  isVirtual
  isSubscriptionOnly
  variants {
    id
    name
    sku
    price
    stock
    isDefault
    image {
      url
      altText
      key
      variants {
        key
        width
      }
    }
    subscriptionPlans {
      id
      name
      initialPeriod
      initialPrice
      recurringPeriod
      recurringPrice
    }
  }
}
fragment image on Image {
  url
  altText
  key
  variants {
    url
    width
    key
  }
}
fragment imageContent on ImageContent {
  images {
    ...image
  }
}
fragment singleLine on SingleLineContent {
  text
}
fragment richText on RichTextContent {
  json
  html
  plainText
}
fragment paragraphCollection on ParagraphCollectionContent {
  paragraphs {
    title {
      ...singleLine
    }
    body {
      ...richText
    }
    images {
      ...image
    }
  }
}
```

We use the `src/` directory to hold the actual entry pages
related to query result in `gatsby-node.js`.

Styled components and UI.

NB! react-framework orientated more then traditional gatsby file struckture


 ## 💫 Deploy
 
There are multiple alternatives for deployments, check out one of the ones below:



### Deploying with [Vercel Now][19]

- Register a Vercel account
- Install Vercel Now: `npm i -g now`
- Run `now`



extraction of gatsby-node.js:
```
 // Map Crystallize shape names to the page templates
  const templates = {
    Article: path.resolve(`src/page-templates/article.js`),
    Product: path.resolve(`src/page-templates/product/index.js`),
    Folder: path.resolve(`src/page-templates/folder.js`),
  }
```
  
   * Get items 5 levels deep from Crystallize.
   * You can get even more levels by quering more children:
   * children {
   *   path
   *   shape {
   *     name
   *   }
   * }
  
extraction from gatsby-node.js
  ``` 
  return graphql(
    `
      query loadAllCrystallizeCatalogueItems {
        crystallize {
          catalogue(language: "en", path: "/") {
            children {
              path
              shape {
                name
              }
              children {
                path
                shape {
                  name
                }
                children {
                  path
                  shape {
                    name
                  }
                  children {
                    path
                    shape {
                      name
                    }
                    children {
                      path
                      shape {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Reduce all items into a single flat array
    const items = []
    {
      ;(function add({ path, shape, children }) {
        if (path && shape) {
          // Ensure that we have a template for this shape
          if (shape.name in templates) {
            items.push({ path, shape, component: templates[shape.name] })
          } else {
            items.push({ path, shape, component: templates.Folder })
            console.log(
              `No template was found for shape "${shape.name}". "${path}" is rendered using the Folder template`
            )
          }
        }
        if (children) {
          children.forEach(add)
        }
      })(result.data.crystallize.catalogue)
    }
```
  #### Create pages for each node
   
          Add optional context data to be inserted
           as props into the page component..
          
           The context data can also be used as
           arguments to the page GraphQL query.
          
           The page "path" is always available as a GraphQL
           argument.
        },
      })
    })
  })
}

```

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
