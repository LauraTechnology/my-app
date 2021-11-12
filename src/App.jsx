import axios from "axios";
import { useEffect, useState } from "react";
import ZooCreate from "./Components/ZooCreate";
import ZooList from "./Components/ZooList";

function App() {
  //hook'as
  const [animals, setAnimals] = useState([]); //default'inis yra tuscias masyvas t.y. default'e (pradiniame) mes neturime jokiu animal'u
  //sugeneruoja laika, kuris yra 'dabar' ir pirskiria
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  //metodas get - kreipiamės i visus animals ir gaunam kiekviena
  useEffect(() => {
    axios.get("http://localhost:3003/animals").then((res) => {
      setAnimals(res.data);
      console.log(res.data);
    });
  }, [lastUpdate]);

  //pots metodas - kriepiames i visus, idedame viena animal
  const create = (animal) => {
    axios.post("http://localhost:3003/animals", animal).then((res) => {
      console.log(res.data);
      setLastUpdate(Date.now());
    });
  };

  //visa aplikacija apskliausta su className zoo
  //renderinam Zoolist. Norint renderinti Zoolist, mums reikia perduoti ZooAnimals
  return (
    <div className="zoo">
      <ZooCreate create={create}></ZooCreate>
      <ZooList animals={animals}></ZooList>
    </div>
  );
}

export default App;
