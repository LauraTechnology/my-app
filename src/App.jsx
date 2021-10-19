import EightCircles from "./Components/EightCircles";

const data = [
  {
    ls: "2px",
    circleColor: "green",
    circleNumber: 1,
  },

  {
    ls: "1px",
    circleColor: "yellow",
    circleNumber: 2,
  },

  {
    ls: "-2px",
    circleColor: "white",
    circleNumber: 3,
  },

  {
    ls: "4px",
    circleColor: "pink",
    circleNumber: 4,
  },
  {
    ls: "2px",
    circleColor: "green",
    circleNumber: 5,
  },
  {
    ls: "2px",
    circleColor: "green",
    circleNumber: 6,
  },
  {
    ls: "2px",
    circleColor: "green",
    circleNumber: 7,
  },
  {
    ls: "2px",
    circleColor: "green",
    circleNumber: 8,
  },
];

/* map'as ''vaziuoja'' per kiekviena komponenta 
per kiekviena masyvo nari praeinam ir paduodam reiksmes 

*/

function App() {
  return (
    <>
      {data.map((eightCircles, index) => (
        <EightCircles
          key={index}
          ls={eightCircles.ls}
          circleColor={eightCircles.circleColor}
          circleNumber={eightCircles.circleNumber}
        />
      ))}
    </>
  );
}

export default App;
