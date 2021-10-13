// import './App.css';

import Box from './Components/Box';
// import Simple from './Components/Simple';

// const a = 5;
// const b = 6;

const data = [
  {
    ls: '2px',
    squareColor: 'blue',
    squareNumber: 68
  },
  
];


function App() {

  return (
    <>
    {data.map((box, index) => <Box key={index} boxColor={box.boxColor} ls={box.ls} boxNumber={box.boxNumber} />)}
    </>
  );

}

export default App;
