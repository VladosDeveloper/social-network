import React from "react";
import styled from "styled-components";
import venecia from "../../../assets/main.webp";

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <Image src={venecia} alt="" />
      <InfoBlock>Ava + info</InfoBlock>
      <MyPosts>My posts</MyPosts>
      <NewPosts>New post</NewPosts>
      <AllPosts>New post</AllPosts>
      <AllPosts>New post</AllPosts>
      <AllPosts>New post</AllPosts>
      <AllPosts>New post</AllPosts>
      <AllPosts>New post</AllPosts>
      <AllPosts>New post</AllPosts>
      <AllPosts>New post</AllPosts>
      <AllPosts>New post</AllPosts>
      <AllPosts>New post</AllPosts>
    </StyledMain>
  );
};

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const StyledMain = styled.main`
  grid-area: main;
  background-color: #67c4ef;
`;

const InfoBlock = styled.div``;
const MyPosts = styled.div``;
const NewPosts = styled.div``;
const AllPosts = styled.div``;
