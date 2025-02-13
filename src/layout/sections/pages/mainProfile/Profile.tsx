import { Posts, ShowPostsType } from "./posts/Posts.tsx";
import styled from "styled-components";
import { ProfileInfo } from "./profileInfo/ProfileInfo.tsx";

type ProfileProps = {
  postsData: Array<ShowPostsType>;
};

export const Profile = ({ postsData }: ProfileProps) => {
  return (
    <StyledMainProfile>
      <ProfileInfo />
      <Posts postsData={postsData} />
    </StyledMainProfile>
  );
};

const StyledMainProfile = styled.section``;
