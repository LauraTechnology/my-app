import BlueSquare from './Components/BlueSquare';
import RedCircle from './Components/RedCircle';

function App() {
//idedame componenta
    return (
        <div>
            <BlueSquare buttonText={'S P A U S T I'} /> 
            <BlueSquare buttonText={'S T U M T I'}/>
            <RedCircle color={'red'} /> 
            <RedCircle color={'yellow'} />
         </div>

        
 
       
    );

}

export default App;