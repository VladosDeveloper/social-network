import styled from "styled-components";

type PostProps = {
  text: string;
  likes: number;
};

export const Post = ({ text, likes }: PostProps) => {
  return (
    <StyledPost>
      <Circle></Circle>
      <span>{text}</span>
      <p>Likes {likes}</p>
    </StyledPost>
  );
};

const StyledPost = styled.div``;
const Circle = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: #9db64a;
  border-radius: 50px;
`;
