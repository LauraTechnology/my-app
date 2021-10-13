import FourSquares from "./Components/FourSquares";

function App() {
  //idedame componenta
  return (
    <div>
        <div className="row">
      <FourSquares buttonText={"Nr_1"} />
      <FourSquares buttonText={"Nr_2"} />
      </div>
      <div className="row">
      <FourSquares buttonText={"Nr_3"} />
      <FourSquares buttonText={"Nr_4"} />
      </div>
    </div>
  );
}

export default App;
