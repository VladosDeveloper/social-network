import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-areas:
    "header header "
    "nav main "
    "nav main ";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  gap: 10px;
`;
