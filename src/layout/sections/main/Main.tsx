import { Profile } from "../pages/mainProfile/Profile.tsx";
import { Dialogs } from "../pages/dialogs/Dialogs.tsx";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Settings } from "../pages/settings/Settings.tsx";
import { News } from "../pages/news/News.tsx";
import { Music } from "../pages/music/Music.tsx";

export const Main = () => {
  return (
    <StyledMain>
      <Routes>
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/dialogs/*" element={<Dialogs />} />
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
