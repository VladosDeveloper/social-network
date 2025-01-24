import "./App.css";
import { Header } from "./layout/header/Header.tsx";
import { SideBar } from "./layout/sections/sideBar/SideBar.tsx";
import { Main } from "./layout/sections/main/Main.tsx";
import { GridContainer } from "./components/gridContainer/gridContainer.ts";

function App() {
  return (
    <>
      <GridContainer>
        <Header />
        <SideBar />
        <Main />
      </GridContainer>
    </>
  );
}

export default App;
