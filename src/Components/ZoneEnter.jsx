import { useState } from "react"

function ZoneEnter() {

    const [count, setCount] = useState(0);  /* (0) nurodoma pradine busena */
    const [color, setColor] = useState('#000000'); /* ('#000000') nurodoma pradine busena */
    const [shape, setShape] = yseState('c');

    /*  rasome daikta, kuris visa kontroliuos: */
    const formControl = what => {
        switch(what) {
            case 'count':
                setCount(e.target.value);
                break;
                case 'color':
                    setColor(e.target.value);
                    break;
                    case 'shape':
                        setShape(e.target.value);
                        break;
                        default;
        }
    }

    return(
        <>
        <div className="zone-enter">
            
            <input type="text"></input>
            <input type="color"></input>
            <select>
                <option value="c">Circle</option>
                <option value="sc">Square</option>
                <option value="h1">Horizontal line</option>
                <option value="v1">Vertical line</option>
            </select>
            <button>Show it to me</button>


        </div>

        </>
    )
}

export default ZoneEnter;