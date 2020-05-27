import React from "react"
import { FormattedNumber } from "react-intl"
import { useStaticQuery, graphql } from "gatsby"

export const CurrencyValue = ({ value }) => {
  const data = useStaticQuery(graphql`
    {
      crystallize {
        tenant {
          defaults {
            currency
          }
        }
      }
    }
  `)

  return (
    <FormattedNumber
      currency={data.crystallize.tenant.defaults.currency}
      value={value}
    />
  )
}
