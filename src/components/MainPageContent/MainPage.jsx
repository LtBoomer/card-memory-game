import "./MainPage.scss";

const MainPage = (props) => {
  const { buttonClick } = props;
  return (
    <div className="main-content-wrapper">
      <div className="main-content">
        <h1>Memory card game!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          inventore accusantium delectus libero neque aspernatur sapiente, animi
          cum repellat, fuga hic quidem. Vel corporis ex earum minima
          necessitatibus numquam? Tempore?
        </p>
        <div className="button-wrapper">
          <button
            onClick={() => {
              buttonClick(false);
            }}
          >
            Play!
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
