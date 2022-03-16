import React from "react";
import { useState, useEffect } from "react";
import "../src/CSS_folder/Armor_set_list.scss";

export const ArmorSetList = ({ armorSets, chooseArmorPieces }) => {
    //low rank
    const [lowRank, setLowRank] = useState();
    //high rank
    const [highRank, setHighRank] = useState();

    const [rankSelect, setRankSelect] = useState(false);

    useEffect(() => {
        setLowRank(
            armorSets.filter(armor => armor.rank === "low")
        )
        setHighRank(
            armorSets.filter(armor => armor.rank === "high")
        )
    }, [])

    const selectedRank = (
        rankSelect === false ? (lowRank) : (highRank)
    )
    const rankArmorSets = (
        selectedRank === undefined ? (null) : (
            selectedRank.map((armor, idx) => {
                let piecesArray = new Array(5).fill(""); //create array to have empty spaces in case not all armor pieces exist
                for (let piece of armor.pieces) {
                    if (piece.type === "head") {
                        piecesArray[0] = piece;
                    } else if (piece.type === "chest") {
                        piecesArray[1] = piece;
                    } else if (piece.type === "gloves") {
                        piecesArray[2] = piece;
                    } else if (piece.type === "waist") {
                        piecesArray[3] = piece;
                    } else {
                        piecesArray[4] = piece;
                    }
                }
                return <div className="armor-set" key={`${idx}-${armor.name}`}>
                    {armor.name}
                    <div className="armor-set-pieces">

                        {piecesArray.map((piece, idx) => {
                            return piece !== "" ? (
                                <div className="armor-set-piece-unit" key={`${idx}-${armor.name}-${piece.type}`} onClick={() => chooseArmorPieces(piece)}>{piece.type}</div>
                            ) : (
                                <div className="armor-set-piece-unit" key={`${idx}-${armor.name}-non`}>non</div>
                            )
                        }
                        )}
                    </div>
                </div>
            })
        )
    )

    return (
        <div>
            <div>Armor Sets</div>
            <label>
                <input type="radio" name="sort" id="role" onClick={() => setRankSelect(false)} />
                <p id="role" className="org-word second">Low Rank</p>
            </label>
            <label>
                <input type="radio" name="sort" id="role" onClick={() => setRankSelect(true)} />
                <p id="role" className="org-word second">High Rank</p>
            </label >
            <div>
                {rankArmorSets}
            </div>
        </div >
    )
};


