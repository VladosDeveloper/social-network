import styled from "styled-components";
import { NavLink } from "react-router-dom";

export type NavBarDataPropsType = {
  to: string;
  title: string;
  id: number;
};

type NavBarPropsType = {
  navBarData: NavBarDataPropsType[];
};

export const NavBar = ({ navBarData }: NavBarPropsType) => {
  return (
    <StyledNavBar>
      <ul>
        {navBarData.map((item) => {
          return (
            <NavBarItem key={item.id}>
              <NavBarLink to={`${item.to}`}>{item.title}</NavBarLink>
            </NavBarItem>
          );
        })}
      </ul>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  grid-area: nav;
  background-color: #e8dc19;
  padding: 10px;
`;

const NavBarItem = styled.div`
  padding: 10px 10px 0 10px;
`;

const NavBarLink = styled(NavLink)`
  color: #000;
  font-family: Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;

  &.active {
    font-weight: 400;

    &::before {
      content: "> ";
    }
  }
`;
