import React from "react"
import { Link } from "gatsby"

import { H3 } from "ui"
import { useT, useLocale } from "lib/i18n"

import { Img, Price, List, ListItem, Text, ListWrapper } from "./styles"
import Pagination from "./pagination"

function Results({ items, pageInfo, navigate }) {
  const t = useT()
  const locale = useLocale()

  return (
    <ListWrapper>
      <List>
        {items?.length
          ? items.map(({ matchingVariant, path, name, id }, index) => {
              const { images, priceVariants } = matchingVariant ?? {}
              const { price, currency } = priceVariants?.find(
                (pv) => pv.identifier === locale.priceVariant
              ) || {
                price: matchingVariant?.price || "n/a",
                currency: "eur",
              }

              return (
                <ListItem key={`${id}-${index}`}>
                  <Link to={path}>
                    {images?.[0] && (
                      <Img {...images?.[0]} alt="" sizes="250px" />
                    )}
                    <Text>
                      <Price>
                        {t("common.price", {
                          value: price,
                          currency,
                        })}
                      </Price>
                      <H3>{name}</H3>
                    </Text>
                  </Link>
                </ListItem>
              )
            })
          : "No results for this search"}
      </List>
      <Pagination pageInfo={pageInfo} navigate={navigate} />
    </ListWrapper>
  )
}

export default Results
