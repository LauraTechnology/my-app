import { useState } from "react";

function SelectInput8() {

    const[value, setValue] = useState('2')

    const change = e => {
        console.log('Geometrine', e.target.value);
        setValue(e.target.value);
    }
 

    return (
        <>
            <div className="sq">
                <select onChange={change} value={value}>
                    <option value={1}>circle</option>
                    <option value={2}>square</option>
                    <option value={3}>vertical line</option>
                    <option value={4}>horizontal line</option>
                </select>
            </div>
        </>
    )
}

export default SelectInput8;