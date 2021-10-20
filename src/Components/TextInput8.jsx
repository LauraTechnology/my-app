import { useState } from "react";


function TextInput8() {

    const [value, setValue] = useState('')
    const [tvalue, setTvalue] = useState('')
    

    const change = e => {
        console.log('You Typed', e.target.value);
        setValue(e.target.value);
    }

    const tchange = e => {
        setTvalue(e.target.value);
    }

    


  return (
        <>
            <div>
             <input onChange={change} type="text" value={value} />
             <textarea onChange={tchange} value={tvalue}></textarea>
            </div>
        </>
  );
}

export default TextInput8;
