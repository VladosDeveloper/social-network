import styled from "styled-components";
import { Post } from "./post/Post.tsx";

export const Posts = () => {
  return (
    <StyledPost>
      <PostsBlock>
        <MyPosts>My posts</MyPosts>
        <NewPosts>
          <textarea name="" id=""></textarea>
          <button>Add new post</button>
        </NewPosts>
        <AllPosts>
          <Post text={"I'm learning react"} likes={44} />
          <Post text={"I'm going to walk in evening"} likes={96} />
        </AllPosts>
      </PostsBlock>
    </StyledPost>
  );
};
const StyledPost = styled.div``;
const PostsBlock = styled.div``;
const MyPosts = styled.div``;
const NewPosts = styled.div``;
const AllPosts = styled.div``;
