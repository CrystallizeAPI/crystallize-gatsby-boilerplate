import React, { useState } from "react"

import { Input, InputGroup, InputButton } from "ui"
import { useT } from "lib/i18n"

function Search({ searchTerm, onChange }) {
  const [searchString, setSearchString] = useState(searchTerm ?? "")
  const t = useT()

  const handleSubmit = (event) => {
    event.preventDefault()
    onChange(searchString)
  }

  const handleSearchTerm = (event) => {
    setSearchString(event.target.value)
  }

  return (
    <InputGroup
      css={`
        border-radius: 0;
      `}
      as="form"
      onSubmit={handleSubmit}
    >
      <Input
        type="search"
        value={searchString}
        onChange={handleSearchTerm}
        placeholder={t("layout.searchPlaceholder")}
        css={`
          padding-left: 20px;
        `}
      />
      <InputButton
        css={`
          border-radius: 0;
        `}
      >
        ➔
      </InputButton>
    </InputGroup>
  )
}

export default Search
