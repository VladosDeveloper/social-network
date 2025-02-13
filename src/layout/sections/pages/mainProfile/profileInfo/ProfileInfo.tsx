import venecia from "../../../../../assets/main.webp";
import styled from "styled-components";

export const ProfileInfo = () => {
  return (
    <StyledProfileInfo>
      <Image src={venecia} alt="" />
      <InfoBlock>Ava + info</InfoBlock>
    </StyledProfileInfo>
  );
};

const StyledProfileInfo = styled.section`
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const InfoBlock = styled.div`
  padding: 10px;
`;
