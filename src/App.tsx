import "./App.css";
import { Header } from "./layout/header/Header.tsx";
import {
  NavBar,
  NavBarDataPropsType,
} from "./layout/sections/sideBar/SideBar.tsx";
import { Main } from "./layout/sections/main/Main.tsx";
import { GridContainer } from "./components/gridContainer/gridContainer.ts";
import { BrowserRouter } from "react-router-dom";
import { ShowPostsType } from "./layout/sections/pages/mainProfile/posts/Posts.tsx";
import {
  DialogsDataType,
  MessagesDataType,
} from "./layout/sections/pages/dialogs/Dialogs.tsx";

type AppPropsType = {
  navBarData: NavBarDataPropsType[];
  dialogsData: Array<DialogsDataType>;
  messagesData: Array<MessagesDataType>;
  postsData: Array<ShowPostsType>;
};

function App(props: AppPropsType) {
  const { navBarData, dialogsData, messagesData, postsData } = props;

  return (
    <>
      <BrowserRouter>
        <GridContainer>
          <Header />
          <NavBar navBarData={navBarData} />
          <Main
            dialogsData={dialogsData}
            messagesData={messagesData}
            postsData={postsData}
          />
        </GridContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
