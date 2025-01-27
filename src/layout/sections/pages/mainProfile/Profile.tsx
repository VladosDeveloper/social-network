import venecia from "../../../../assets/main.webp";
import { Posts } from "./posts/Posts.tsx";
import styled from "styled-components";

export const Profile = () => {
  return (
    <StyledMainProfile>
      <Image src={venecia} alt="" />
      <InfoBlock>Ava + info</InfoBlock>
      <Posts />
    </StyledMainProfile>
  );
};

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
`;

const StyledMainProfile = styled.section``;

const InfoBlock = styled.div``;
