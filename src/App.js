import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { ArmorSetList } from './Armor_set_list';
import { ArmorImages } from './Armor_images';

function App() {
  const [armorSets, setArmorSets] = useState("");
  const [armorPieces, setArmorPieces] = useState({
    "head": "",
    "chest": "",
    "gloves": "",
    "waist": "",
    "legs": ""
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
    return null
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
    console.log(armorPieces);
  }

  const chooseCurrentArmorPiece = (piece) => { //shows last clicked armor piece
    setCurrentArmorPiece(prevState => ({ ...prevState, "armor": piece }));
    console.log(currentArmorPiece);
  }

  const chooseArmorPiecesAndCurrentArmor = (piece) => {
    chooseArmorPieces(piece);
    chooseCurrentArmorPiece(piece);
  }

  return (
    <div className="App">
      <h1>Monster Hunter World Armor Builds</h1>
      <section>
        <ArmorImages armorPieces={armorPieces} />
        <ArmorSetList armorSets={armorSets} chooseArmorPiecesAndCurrentArmor={chooseArmorPiecesAndCurrentArmor} />
        <div>Armor Piece Requirements</div>
        <div>Armor Stats</div>
      </section>
    </div>
  );
}

export default App;
