//render names

import ZooAnimal from "./ZooAnimal";

function ZooList({ animals, modal }) {
  return (
    <div className="zoo__list">
      {animals.map((animal) => (
        <ZooAnimal key={animal.id} animal={animal} showModal={modal}></ZooAnimal>
      ))}
    </div>
  );
}

export default ZooList;
