import { useState, useEffect, useRef } from "react";
import FieldAnimal from "./Components/FieldAnimal";
import idGenerator from "./Common/idGenerator";


function App() {

    const [field, setField] = useState([]);
    const [fieldNamber, setFieldNamber] = useState(1);
    const [weight, setWeight] = useState('');
    const [fieldType, setFieldType] = useState('cow');
    🚧 
    const allAnimals = useRef(0);
    const types = useRef({cow:0, sheep:0, horse:0});
    const total = useRef(0)

    const handleWeight = e => {
        setWeight(e.target.value);
    }

    const selectfieldType = e => {
        setFieldType(e.target.value);
    }

    const stats = (fieldCopy) => {
        allAnimals.current = fieldCopy.length;
        types.current = {cow:0, sheep:0, horse:0};
        total.current = 0;
        fieldCopy.forEach(a => {
            types.current[a.animal]++;
            total.current += parseFloat(a.weight);
        })
    }



    const add = (what) => {
        const fieldCopy = field.slice();
        fieldCopy.push({
            id: idGenerator(),
            animal: what,
            field: parseInt(fieldNamber)
        });
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }

    const selectField = e => {
        setFieldNamber(e.target.value);
    }

    const goHome = (id) => {
        const fieldCopy = field.slice();
        const ind = fieldCopy.findIndex(e => e.id === id);
        fieldCopy.splice(ind, 1);
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }

    const groupGoHome = (group) => {
        const fieldCopy = field.slice();
        while(true) {
            const ind = fieldCopy.findIndex(e => e.animal === group);
            if (ind < 0) {
                break;
            }
            fieldCopy.splice(ind, 1);
        }
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }

    useEffect(() => {
        const animalsFromStorage = localStorage.getItem('animals');
        if (null !== animalsFromStorage) {
            setField(JSON.parse(animalsFromStorage));
        }
    }, []);



    return (
        <>
            <div className="field">
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={1} fieldAnimal={fieldAnimal} goHome={goHome}></FieldAnimal>)}
                </div>
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={2} fieldAnimal={fieldAnimal} goHome={goHome}></FieldAnimal>)}
                </div>
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={3} fieldAnimal={fieldAnimal} goHome={goHome}></FieldAnimal>)}
                </div>
            </div>
            <div className="buttons-holder">
                <button onClick={() => add('cow')}>Add cow</button>
                <button onClick={() => add('sheep')}>Add sheep</button>
                <button onClick={() => add('horse')}>Add horse</button>
                <select value={fieldNamber} onChange={selectField}>
                    <option value={1}>Field One</option>
                    <option value={2}>Field Two</option>
                    <option value={3}>Field Three</option>
                </select>
            </div>
            <div className="buttons-holder">
                <button onClick={() => groupGoHome('cow')}>Go cows</button>
                <button onClick={() => groupGoHome('sheep')}>Go sheeps</button>
                <button onClick={() => groupGoHome('horse')}>Go horses</button>
            </div>
        </>
    );

}

export default App;