import React, { useCallback, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import produce from "immer"

import { useT, useLocale } from "lib/i18n"
import { doSearch } from "lib/rest-api"
import { SEARCH_QUERY, urlToSpec, queryStringToObject } from "lib/search"

import { Wrapper, SearchFooter, Header } from "./styles"
import OrderBy from "./order-by"
import Results from "./results"
import Facets from "./facets"
import SearchBox from "./search-box"

function cleanFilterForTotalAggregations(filter) {
  return produce(filter, (draft) => {
    delete draft.productVariants.priceRange
    delete draft.productVariants.attributes
  })
}

async function loadPage(spec) {
  const { data } = await doSearch({
    query: SEARCH_QUERY,
    variables: {
      ...spec,
      aggregationsFilter: cleanFilterForTotalAggregations(spec.filter),
    },
  })

  const {
    search,
    aggregations: { aggregations },
  } = data ?? {}

  return {
    items: search.edges
      .filter(({ node }) => node.type === "product")
      .map(({ node }) => ({ ...node })),
    pageInfo: search.pageInfo,
    totalCount: search.aggregations.totalResults,
    aggregations,
  }
}

function Search(props) {
  const { location, path } = props
  const t = useT()
  const [firstLoad, setFirstLoad] = useState(false)
  const locale = useLocale()
  const [data, setData] = useState(undefined)
  const query = location.search

  /**
   * Memoize the load page function so that it only changes
   * if the asPath or locale changes
   */
  const loadPageCb = useCallback(
    async (query) => {
      const queryObject = queryStringToObject(query)

      const newData = await loadPage(
        urlToSpec({ query: queryObject, asPath: path }, locale)
      )
      setData(newData)
    },
    [path, locale]
  )

  // Query changed
  useEffect(() => {
    if (!firstLoad) {
      setFirstLoad(true)
    }

    loadPageCb(location.search)
  }, [location.search, loadPageCb, firstLoad])

  const spec = urlToSpec({ query, asPath: path }, locale)

  // Change the url query params
  function changeQuery(fn) {
    const queryObject = queryStringToObject(location.search)

    const newQuery = produce(queryObject, (draft) => {
      delete draft.before
      delete draft.after
      fn(draft)
    })
    const pathname = location.pathname.replace(/\/$/, "")
    const newSearchString = new URLSearchParams(newQuery).toString()

    navigate(`${pathname}/?${newSearchString}`, { replace: true })
  }

  function changePage({ direction }) {
    if (direction === "nextPage") {
      changeQuery((query) => {
        query.after = data.search.pageInfo.endCursor
      })
    } else {
      changeQuery((query) => {
        query.before = data.search.pageInfo.startCursor
      })
    }
  }

  const handleSearchTerm = (value) => {
    changeQuery((query) => {
      if (value) {
        query.searchTerm = value
      } else {
        delete query.searchTerm
      }
    })
  }

  const handleOrderBy = (orderBy, index) => {
    changeQuery((query) => {
      if (index > 0) {
        query.orderby = orderBy.value
      } else {
        delete query.orderby
      }
    })
  }

  return (
    <Wrapper>
      <Header>
        <SearchBox
          searchTerm={spec.filter.searchTerm}
          onChange={handleSearchTerm}
        />
        <SearchFooter>
          {data && (
            <h3>
              {t("search.foundResults", {
                count:
                  spec.filter.searchTerm !== "searching" && data.totalCount,
              })}
            </h3>
          )}
          <OrderBy orderBy={spec.orderBy} onChange={handleOrderBy} />
        </SearchFooter>
      </Header>
      <Facets
        aggregations={data?.aggregations ?? {}}
        changeQuery={changeQuery}
        spec={spec}
      />
      <Results
        items={data?.items ?? []}
        navigate={changePage}
        pageInfo={data?.pageInfo ?? []}
      />
    </Wrapper>
  )
}

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
}

export default Search
