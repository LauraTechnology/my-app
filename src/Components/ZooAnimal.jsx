//render names

function ZooAnimal({animal}) {
// stats - statistika
    return(
        <div className="zoo__list__animal">
            <div className="zoo__list__animal__name">{animal.name}</div>
            <div className="zoo__list__animal__type">{animal.type}</div>
            <div className="zoo__list__animal__stats">
                <span>{animal.born}</span>
                <span>{animal.weight}</span>
        </div>
    )
     
}

export default ZooAnimal;