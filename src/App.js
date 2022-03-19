import logo from './logo.svg';
import './App.scss';
import { useState, useEffect } from "react";
import { ArmorSetList } from './components/Armor_set_list';
import { ArmorImages } from './components/Armor_images';
import { ArmorRequirements } from './components/Armor_requirement';
import { ArmorStats } from './components/Armor_stats';

function App() {
  const [armorSets, setArmorSets] = useState("");
  const [armorPieces, setArmorPieces] = useState({
    "head": null,
    "chest": null,
    "gloves": null,
    "waist": null,
    "legs": null
  })
  const [currentArmorPiece, setCurrentArmorPiece] = useState({
    "armor": ""
  })

  useEffect(() => {
    fetch('https://mhw-db.com/armor/sets')
      .then(response => response.json())
      .then(sets => setArmorSets(sets));
  }, [])

  //to show while information is fetched
  if (armorSets === "") {
    return <div>Loading</div>
  }

  //set armor pieces
  //   //sets the armorpieces from the armor set list
  //   //clicking on the armor set pieces will add the images of the piece to the armorPiece state
  //   //send to ArmorImages 
  const chooseArmorPieces = (piece) => {
    let armorType = piece.type;
    let newState = {};
    newState[armorType] = piece;
    setArmorPieces(prevState => ({ ...prevState, ...newState }));
  }

  const chooseCurrentArmorPiece = (piece) => { //shows last clicked armor piece
    setCurrentArmorPiece(prevState => ({ ...prevState, "armor": piece }));
  }

  const chooseArmorPiecesAndCurrentArmor = (piece) => {
    chooseArmorPieces(piece);
    chooseCurrentArmorPiece(piece);
  }

  return (
    <div className="App">
      <h1>Monster Hunter World Armor Builds</h1>
      <section className='main-component-section'>
        <div className='component-section'>
          <ArmorImages armorPieces={armorPieces} />
          <ArmorSetList armorSets={armorSets} chooseArmorPiecesAndCurrentArmor={chooseArmorPiecesAndCurrentArmor} />
          <ArmorRequirements currentArmorPiece={currentArmorPiece} />
          <ArmorStats currentArmorPiece={currentArmorPiece} armorPieces={armorPieces} />
        </div>
      </section>
    </div>
  );
}

export default App;
