import { useState } from "react"
import FieldAnimal from "./Components/FieldAnimal";


function App() {

    const [field, setField] = useState([]);
    const [fieldNamber, setFieldNamber] = useState(1);

    const add = (what) => {
        const fieldCopy = field.slice();
        fieldCopy.push({animal:what});
        setField(fieldCopy);
        console.log(fieldCopy);
    }

    const selectField = e => {
        setFieldNamber(e.target.value);
    }

       // useEffect(() => {
    //     console.log('susirenderino')
    // }, []);

    return (
        <div className="field">
        <div>
                {field.map((fieldAnimal, i) => 
                <FieldAnimal key={i} fieldAnimal={fieldAnimal}>

                </FieldAnimal>)}
        </div>
                <button onClick={() => add('cow')} > Add cow </button>
                <button onClick={() => add('sheep')} > Add sheep </button>
                <button onClick={() => add('horse')} > Add horse </button>
                <select value={fieldNamber} onChange={selectField}>
                    <option value={1}>Field One</option>
                    <option value={2}>Field Two</option>
                    <option value={3}>Field Three</option>
                </select>


        </div>
    )
}

export default App;