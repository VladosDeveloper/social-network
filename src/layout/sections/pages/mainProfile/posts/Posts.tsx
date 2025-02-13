import styled from "styled-components";
import { Post } from "./post/Post.tsx";

export type ShowPostsType = {
  id: number;
  text: string;
  likes: number;
};

type PostsPropsType = {
  postsData: ShowPostsType[];
};

export const Posts = ({ postsData }: PostsPropsType) => {
  return (
    <StyledPost>
      <PostsBlock>
        <MyPosts>My posts</MyPosts>
        <NewPosts>
          <textarea name="" id=""></textarea>
          <button>Add new post</button>
        </NewPosts>
        <AllPosts>
          {postsData.map((el) => (
            <Post key={el.id} text={el.text} likes={el.likes} />
          ))}
        </AllPosts>
      </PostsBlock>
    </StyledPost>
  );
};

// Styles
const StyledPost = styled.section`
  padding: 10px;
`;
const PostsBlock = styled.div``;
const MyPosts = styled.h3``;
const NewPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin: 10px 0;
`;
const AllPosts = styled.div``;
