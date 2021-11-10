//ZooCreate'e bus inputai
import { useState } from "react";

function ZooCreate({ create }) {

  //sukurtas 1 state'as, kuris kontroliuos visus keturis (name, type, weight, date)
  const [inputs, setInputs] = useState({
    name: '',
    type: '',
    weight: '',
    date: ''
  })

  //daroma input'o kopija
  const formControl = (e, what) => {
    const inputsCopy = {...inputs};
    inputsCopy[what] = e.target.value;
    setInputs(inputsCopy);
  }
  return (
    
      <div className="zoo__create">
      <div className="zoo__create__input">
      <input type="text" value={inputs.name} onChange={(e) => formControl(e, 'name')}/>
      </div>
      <div className="zoo__create__input">
      <input type="text" value={inputs.type} onChange={(e) => formControl(e, 'type')}/>
      </div>
      <div className="zoo__create__input">
      <input type="text" value={inputs.weight} onChange={(e) => formControl(e, 'weight')}/>
      </div>
      <div className="zoo__create__input">
      <input type="text" value={inputs.date} onChange={(e) => formControl(e, 'date')}/>
      </div>
    </div>
  );
}

export default ZooCreate;
