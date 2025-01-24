import React from "react";
import styled from "styled-components";

export const SideBar: React.FC = () => {
  return (
    <StyledNavBar>
      <div>
        <a href="">Profile</a>
      </div>
      <div>
        <a href="">Messages</a>
      </div>
      <div>
        <a href="">News</a>
      </div>
      <div>
        <a href="">Music</a>
      </div>
      <div>
        <a href="">Settings</a>
      </div>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  grid-area: nav;
  background-color: #e8dc19;
`;
