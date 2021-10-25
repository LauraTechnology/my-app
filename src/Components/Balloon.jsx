

function Balloon ({balloonColor}) {

    const randomW = Math.floor(Math.random() * 100)
    const randomH = Math.floor(Math.random() * 100)

    return (

        <div className = "balloon" style={{backgroundColor: balloonColor, left: randomW + 'vw', top: randomH + 'vh'}} >
           

        </div>
     

    );
}

export default Balloon;



// susikurti state Componente 'Balloon'
//
//height, setHeight, false, setFales; jeigu true, tada display