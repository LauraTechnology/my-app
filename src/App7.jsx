import ButtonColorChanger from "./Components/ButtonColorChanger";


function App () {

    const [bg, setBg] = useState('black');


    const changeBg = color => {
        setBg(color)
    }

    changeBg = () => {
        setBg('#'+Math.floor(Math.random()*16777215).toString(16))
    }

    return (
        <div className="sq" style={{backgroundColor:bg}} >
            <ButtonColorChanger kasNors={changeBg}></ButtonColorChanger>

        </div>
    )
}

export default App;