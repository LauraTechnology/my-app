

function EightCircles ({ls, circleColor, circleNumber}) {

    return (

        <div className = "eight-circles" >
            <span style= {{
                
                letterSPacing: ls,
                color: circleColor,
                number: circleNumber
            
            
            
            
            }}>This is hexColorCode circle # {circleNumber}</span>
            

        </div>

    );

}

export default EightCircles;