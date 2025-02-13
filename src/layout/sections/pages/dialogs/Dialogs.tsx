import styled from "styled-components";
import { DialogItems } from "./dialogItem/DialogItems.tsx";
import { Messages } from "./messages/Messages.tsx";

export type DialogsDataType = {
  id: number;
  name: string;
};

export type MessagesDataType = {
  id: number;
  text: string;
};

type DialogsPropsType = {
  dialogsData: DialogsDataType[];
  messagesData: MessagesDataType[];
};

export const Dialogs = (props: DialogsPropsType) => {
  const { dialogsData, messagesData } = props;
  return (
    <StyledDialogs>
      <h2>Dialogs</h2>

      <GridWrapper>
        {/*Dialog list column*/}
        <DialogsBlock>
          {dialogsData.map((dialog) => (
            <DialogItems key={dialog.id} name={dialog.name} id={dialog.id} />
          ))}
        </DialogsBlock>

        {/*Conversation column*/}
        <MessagesBlock>
          {messagesData.map((item) => (
            <Messages key={item.id} message={item.text} />
          ))}
        </MessagesBlock>
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
const DialogsBlock = styled.div``;

// Messages
const MessagesBlock = styled.div``;
