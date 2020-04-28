import React from "react"
import PropTypes from "prop-types"
import { IntlProvider } from "react-intl"

import "./global.css"

import Header from "./header"
import { Outer } from "ui"
import SEO from "components/seo"

export * from "./crystallize-fragments"

const Layout = ({ headerItems, children, title }) => {
    return ( <
        IntlProvider locale = "nb" >
        <
        SEO title = { title }
        /> <
        Header headerItems = { headerItems }
        /> <
        main > { children } < /main> <
        footer style = {
            { margin: "2rem 0" } } >
        <
        Outer >
        Nettside av: { ` ` } <
        a href = "https://martin-andersen-cv.now.sh" > Martin Andersen < /a> { ` ` } | Laget med { ` ` } <a href = "https://www.gatsbyjs.org" > Gatsby < /a> og <a href="https:/ / www.crystallize.com ">Crystallize</a> <
        /Outer> <
        /footer> <
        /IntlProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout