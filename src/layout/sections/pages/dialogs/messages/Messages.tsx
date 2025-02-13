import styled from "styled-components";

type MessagesPropsType = {
  message: string;
};

export const Messages = ({ message }: MessagesPropsType) => {
  return <Message>{message}</Message>;
};

const Message = styled.div`
  padding: 5px;
`;
