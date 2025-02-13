import { Profile } from "../pages/mainProfile/Profile.tsx";
import {
  Dialogs,
  DialogsDataType,
  MessagesDataType,
} from "../pages/dialogs/Dialogs.tsx";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Settings } from "../pages/settings/Settings.tsx";
import { News } from "../pages/news/News.tsx";
import { Music } from "../pages/music/Music.tsx";
import { ShowPostsType } from "../pages/mainProfile/posts/Posts.tsx";

type MainPropsType = {
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
  postsData: Array<ShowPostsType>;
};

export const Main = (props: MainPropsType) => {
  const { dialogsData, messagesData, postsData } = props;
  return (
    <StyledMain>
      <Routes>
        <Route path="/profile/*" element={<Profile postsData={postsData} />} />
        <Route
          path="/dialogs/*"
          element={
            <Dialogs dialogsData={dialogsData} messagesData={messagesData} />
          }
        />
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/news/*" element={<News />} />
        <Route path="/music/*" element={<Music />} />
      </Routes>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  grid-area: main;
  background-color: #67c4ef;
`;
