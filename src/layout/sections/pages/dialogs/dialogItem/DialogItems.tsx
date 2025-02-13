import styled from "styled-components";
import { NavLink } from "react-router-dom";

type DialogPropsType = {
  id: number;
  name: string;
};

export const DialogItems = ({ id, name }: DialogPropsType) => {
  return (
    <DialogList>
      <DialogItem>
        <DialogNavLink to={`/dialogs/${id}`}>{name}</DialogNavLink>
      </DialogItem>
    </DialogList>
  );
};

// Dialogs
const DialogList = styled.div`
  margin-top: 5px;
`;
const DialogItem = styled.div`
  padding: 5px;
`;

const DialogNavLink = styled(NavLink)`
    &.active {
        font-weight: 500;

        &::before {
            content: " > ";
        }
`;
