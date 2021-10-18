import EightCircles from "./Components/EightCircles";

const data = [
    {
      ls: '2px',
      boxColor: 'green',
      squareNumber: 68
    },
  
      {
        ls: '1px',
        boxColor: 'yellow',
        boxNumber: 45
      },
  
        {
          ls: '-2px',
          boxColor: 'white',
          boxNumber: 90
        },
  
          {
            ls: '4px',
            boxColor: 'pink',
            boxNumber: 101
          }
    
  ];

function App () {

    return (
        <div>
            <EightCircles color = 'green'/>
        </div>

    );

}

export default App;