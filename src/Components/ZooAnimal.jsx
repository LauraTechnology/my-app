//render names
// stats - statistika
function ZooAnimal({ animal, modal }) {

  //kai paspaudziam showEdit, mums turetu islysti showModal
  const showEdit = () => {
    modal(animal)
  }


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
      <button onClick={showEdit}>Edit</button>
    </div>
  );
}

export default ZooAnimal;
