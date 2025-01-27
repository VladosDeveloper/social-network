import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Dialogs = () => {
  return (
    <StyledDialogs>
      <h2>Dialogs</h2>

      <GridWrapper>
        {/*Dialog list column*/}
        <DialogList>
          <DialogItem>
            <DialogNavLink to="/dialogs/1">Vlad</DialogNavLink>
          </DialogItem>
          <DialogItem>
            <DialogNavLink to="/dialogs/2">Yura</DialogNavLink>
          </DialogItem>
          <DialogItem>
            <DialogNavLink to="/dialogs/3">Kirill</DialogNavLink>
          </DialogItem>
          <DialogItem>
            <DialogNavLink to="/dialogs/4">Lisa</DialogNavLink>
          </DialogItem>
          <DialogItem>
            <DialogNavLink to="/dialogs/5">Veronika</DialogNavLink>
          </DialogItem>
        </DialogList>

        {/*Conversation column*/}
        <Messages>
          <Message>Hi</Message>
          <Message>How are you</Message>
          <Message>Be creative</Message>
          <Message>Smile enough</Message>
          <Message>Looking for yourself</Message>
        </Messages>
      </GridWrapper>
    </StyledDialogs>
  );
};

const StyledDialogs = styled.section`
  padding: 30px;
`;

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

// Dialogs
const DialogList = styled.div`
  margin-top: 30px;
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

// Messages
const Messages = styled.div``;
const Message = styled.div`
  padding: 5px;
`;
