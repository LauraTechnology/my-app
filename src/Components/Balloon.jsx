import {useState} from "react"

function Balloon ({balloonColor}) {

    const [disappear, setDisappear] = useState(false);




    const randomW = Math.floor(Math.random() * 100)
    const randomH = Math.floor(Math.random() * 100)
    const handleDisappear = () => { 
        setDisappear(true)
    }

    return (

        <div className = "balloon" style={{backgroundColor: balloonColor, left: randomW + 'vw', top: randomH + 'vh', display: disappear && 'none'}} onClick={handleDisappear} >
    
        </div>
     

    );
}

export default Balloon;



// susikurti state Componente 'Balloon'
//
//height, setHeight, false, setFales; jeigu true, tada display