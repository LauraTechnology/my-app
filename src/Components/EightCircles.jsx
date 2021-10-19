

function EightCircles ({ls, circleColor, circleNumber}) {

    return (

        <div className = "eight-circles" style={{backgroundColor: circleColor}}>
            <span style= {{
                
                letterSpacing: ls,
                backgroundColor: circleColor,
                number: circleNumber
            
            }}>This is hexColorCode circle # {circleNumber}</span>
            

        </div>

    );

}

export default EightCircles;