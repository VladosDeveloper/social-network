import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import {
  DialogsDataType,
  MessagesDataType,
} from "./layout/sections/pages/dialogs/Dialogs.tsx";
import { ShowPostsType } from "./layout/sections/pages/mainProfile/posts/Posts.tsx";
import { NavBarDataPropsType } from "./layout/sections/sideBar/SideBar.tsx";

const navBarData: NavBarDataPropsType[] = [
  { id: 1, to: "/profile", title: "Profile" },
  { id: 2, to: "/dialogs", title: "Messages" },
  { id: 3, to: "/news", title: "News" },
  { id: 4, to: "/music", title: "Music" },
  { id: 5, to: "/settings", title: "Settings" },
];

const dialogsData: Array<DialogsDataType> = [
  { id: 1, name: "Yura" },
  { id: 2, name: "Vlad" },
  { id: 3, name: "Ira" },
  { id: 4, name: "Kirrill" },
  { id: 5, name: "Looiza" },
  { id: 6, name: "Seva" },
];

const messagesData: Array<MessagesDataType> = [
  { id: 1, text: "How are you" },
  { id: 2, text: "Be creative" },
  { id: 3, text: "Smile enough" },
  { id: 4, text: "Looking for yourself" },
];

const postsData: Array<ShowPostsType> = [
  { id: 1, text: "I'm learning react", likes: 44 },
  { id: 2, text: "I'm going to walk in evening", likes: 96 },
  { id: 3, text: "I'm going to gym today", likes: 221 },
];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <App
      postsData={postsData}
      messagesData={messagesData}
      dialogsData={dialogsData}
      navBarData={navBarData}
    />
  </StrictMode>,
);
