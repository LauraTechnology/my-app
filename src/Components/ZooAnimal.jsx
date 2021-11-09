//render names
// stats - statistika
function ZooAnimal({ animal }) {
  return (
    <div className="zoo__list__animal">
      <div className="zoo__list__animal__name">{animal.name}</div>
      <div className="zoo__list__animal__type">{animal.type}</div>
      <div className="zoo__list__animal__stats">
        <span>
          <i>Born date:</i> {new Date(animal.date).getFullYear()}
        </span>
        <span>
          <i>Weight:</i>
          {animal.weight}
        </span>
      </div>
    </div>
  );
}

export default ZooAnimal;
