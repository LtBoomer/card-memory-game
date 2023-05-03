import "./MainGame.scss";
import Level from "./Levels/Level/Level";

const MainGame = () => {
  return (
    <div className="main-game-wrapper">
      <div className="main-game-content-wrapper">
        <h1>DA</h1>
        <div className="card-layout">
          <Level />
        </div>
      </div>
    </div>
  );
};

export default MainGame;
