import EightCircles from "./Components/EightCircles";

const data = [
  {
    ls: "2px",
    circleColor: "#BE2F11",
    circleNumber: 1,
  },

  {
    ls: "1px",
    circleColor: "#6495ED",
    circleNumber: 2,
  },

  {
    ls: "-2px",
    circleColor: "#DFFF00",
    circleNumber: 3,
  },

  {
    ls: "4px",
    circleColor: "#FFBF00",
    circleNumber: 4,
  },
  {
    ls: "2px",
    circleColor: "#FF7F50",
    circleNumber: 5,
  },
  {
    ls: "2px",
    circleColor: "#40E0D0",
    circleNumber: 6,
  },
  {
    ls: "2px",
    circleColor: "#9FE2BF",
    circleNumber: 7,
  },
  {
    ls: "2px",
    circleColor: "#BE2F11",
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
