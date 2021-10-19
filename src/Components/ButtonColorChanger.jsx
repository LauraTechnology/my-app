

function ButtonColorChanger ({kasNors}) {

    return (
        <button onClick={kasNors('yellow')}>Ja Yellow!</button>
        <button onClick={kasNors{'black'}}>Ja Black!</button>
        <button onClick={kasNors('pink')}>Ja Pink!</button>
    )
}

export default ButtonColorChanger;