import Balloon from "./Components/Balloon";

const data = ['grey', 'white', 'yellow', 'pink', 'blue', 'violet', 'red', 'black', 'green', 'orange'];

function App () {

    return (
        <>
        { data.map((color, index) => (
            <Balloon
            key = {index}
            balloonColor = {color}
         
            ></Balloon>

        ) 
         
        ) }
        
        </>
    )
}

export default App;

