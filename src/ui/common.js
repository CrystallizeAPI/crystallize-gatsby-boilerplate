import styled from "styled-components"

import { colors } from "./colors"
import { responsive } from "./responsive"

export const Outer = styled.div`
  margin-bottom: 5px;
  max-width: 1500px;
  padding: 0 10px;
  margin: 0 auto;
  display: block;

  ${responsive.smAndLess} {
    padding: 0 10px;
  }
  .crystallize-grid-cell {
    background: transparent;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  padding: 3px;
  max-width: 800px;
  margin: ${(p) => (p.centerContent ? "0 auto" : "0 0 10px 0")};

  p {
    font-size: 18px;
    line-height: 1.8rem;
    color: ${colors.darkText};
  }
`