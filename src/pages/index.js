import React from "react"
import { graphql } from "gatsby"
import Grid from "@crystallize/grid-renderer/react"
import styled from "styled-components"
import Layout from "components/layout"
import Product from "components/category-item"
import { Outer, Header, } from "ui"


const StyledGrid = styled(Grid)`
  grid-gap: 1rem; 

  @media (max-width: 767px) {
    grid-template-columns: 1fr !important;
  }
`

export default function IndexPage({ data }) {
  const {
    crystallize: {
      grid,
      headerItems: { children: headerItems },
    },
  } = data

  return (
    <Layout title="Velkommen til Ørn forlag" headerItems={headerItems}>
      <Outer>
        <Header>
        <p>
        {" "}
        <center>
        <img src="/icons/logo.svg" alt="Ørn forlag" /><h1>Ørn forlag</h1>
        </center>
                   </p>        
          {" "}
            <p>
           Brer sine vide vinger over sentrale deler av norsk natur, og bærer kunnskap ut til folket gjennom fysiske såvel som digitale medier.{" "}
          </p>{" "}
        </Header>{" "}
        {grid && (
          <StyledGrid
            model={grid}
            cellComponent={({ cell }) => <Product data={cell.item} />}
          />
        )}{" "}
      </Outer>{" "}
    </Layout>
  )
}

export const query = graphql`
  query getIndex {
    crystallize {
      headerItems: catalogue(language: "en", path: "/") {
        children {
          name
          path
        }
      }
      grid(id: "5ea85ce153d66b001c00bef1") {
        id
        name
        rows {
          columns {
            layout {
              rowspan
              colspan
            }
            itemType
            itemId
            item {
              ...crystallize_item
              ...crystallize_product
            }
          }
        }
      }
    }
  }
`
