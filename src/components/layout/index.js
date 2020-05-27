import React from "react"
import PropTypes from "prop-types"
import { IntlProvider } from "react-intl"

import "./global.css"

import Header from "./header"
import { Outer } from "ui"
import SEO from "components/seo"

export * from "./crystallize-fragments"

const Layout = ({ headerItems, children, title }) => {
  return (
    <IntlProvider locale="nb">
      <SEO title={title} /> <Header headerItems={headerItems} />{" "}
      <main> {children} </main>{" "}
      <footer style={{ margin: "2rem 0" }}>
        <Outer>
          <strong>Ørn forlag</strong> Veståsen 4,1362 Hosle,Norway.<br></br>
          Tlf.: (+47) 909 60 404 | Mail: bjorn[@]ornforlag.no | Org.nr.:
          994304399 MVA | Kontonr.: 9235.27.10220 Nettside av: {` `}{" "}
          <a href="https://martin-andersen.netlify.app"> Martin Andersen </a>{" "}
          {` `} | Laget med {` `}{" "}
          <a href="https://www.gatsbyjs.org"> Gatsbyjs </a> og{" "}
          <a href="https://www.crystallize.com ">Crystallize</a>{" "}
        </Outer>{" "}
      </footer>{" "}
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
