import React from "react";
import styled from "styled-components";
import eagle from "../../assets/eagle.png";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo src={eagle} alt="" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  grid-area: header;
  background-color: rgb(264, 95, 95);
`;

const Logo = styled.img`
  max-width: 50px;
  width: 100%;
  object-fit: contain;
  background-color: transparent;
`;
