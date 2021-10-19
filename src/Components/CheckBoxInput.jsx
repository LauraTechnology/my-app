import { useState } from "react"

function CheckBoxInput() {

    const [value, setValue] = useState('')

    const change = e => {
        console.log('ja ja', e.target.value);
        setValue(e.target.value + '|');
    }

    return (
        <div className="sq">
            <input onChange={change} type="checkbox"/>
        </div>
    )
}

export default CheckBoxInput;