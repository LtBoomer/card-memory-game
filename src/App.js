import "./App.scss";
import { useState } from "react";
import MainPage from "./components/MainPageContent/MainPage";
import MainGame from "./components/MainGame/MainGame";

function App() {
  const [mainContent, setMainContent] = useState(true);
  return (
    <div className="main">
      {mainContent && <MainPage buttonClick={setMainContent} />}
      {!mainContent && <MainGame />}
    </div>
  );
}

export default App;
