
function Square({ls, boxColor, boxNumber}) {

    return (
        <>
        <div className="blue-square">
            <span style={{

                letterSpacing: ls,
                color: squareColor
                
                }}>This is the BLACK box namber: {boxNumber}</span>
        </div>
        </>
    )
}

export default Square;