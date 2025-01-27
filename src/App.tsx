import "./App.css";
import { Header } from "./layout/header/Header.tsx";
import { NavBar } from "./layout/sections/sideBar/SideBar.tsx";
import { Main } from "./layout/sections/main/Main.tsx";
import { GridContainer } from "./components/gridContainer/gridContainer.ts";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <GridContainer>
          <Header />
          <NavBar />
          <Main />
        </GridContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
