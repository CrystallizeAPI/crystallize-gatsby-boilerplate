import React from "react"
import { graphql } from "gatsby"
import Grid from "@crystallize/grid-renderer/react"
import styled from "styled-components"

import Layout from "components/layout"
import Product from "components/category-item"

import { H1, Outer, Header } from "ui"

const StyledGrid = styled(Grid)`
  grid-gap: 1rem;
`

export default function IndexPage({ data }) {
  const {
    crystallize: {
      grid,
      headerItems: { children: headerItems },
    },
  } = data

  return (
    <Layout title="Home" headerItems={headerItems}>
      <Outer>
        <Header>
          <H1>Test av </H1>
          <p>forsøk på å forenkle og distribuere. her bruk avCrystallize.com sitt produkt db koblet direkte til gatsbysiden.</p>
        </Header>

        {grid && (
          <StyledGrid
            model={grid}
            cellComponent={({ cell }) => <Product data={cell.item} />}
          />
        )}
      </Outer>
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
      grid(id: "5ea75d7853d66b001c00bd5b") {
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
