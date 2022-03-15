import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { ArmorSetList } from './Armor_set_list';

function App() {
  const [armorSets, setArmorSets] = useState("");

  useEffect(() => {
    fetch('https://mhw-db.com/armor/sets')
      .then(response => response.json())
      .then(sets => setArmorSets(sets));
  }, [])

  //to show while information is fetched
  if (armorSets === "") {
    return null
  }



  return (
    <div className="App">
      <h1>Monster Hunter World Armor Builds</h1>
      <section>
        <div>Armor Images</div>
        <ArmorSetList armorSets={armorSets} />
        <div>Armor Piece Requirements</div>
        <div>Armor Stats</div>
      </section>
    </div>
  );
}

export default App;
