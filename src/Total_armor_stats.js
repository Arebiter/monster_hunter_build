import React from "react";
import { useState, useEffect } from "react";
import "../src/CSS_folder/Armor_images.scss";



export const TotalArmorStats = ({ armorPieces }) => {
    const [totalStats, setTotalStats] = useState({
        "defense": 0,
        "dragon": 0,
        "fire": 0,
        "ice": 0,
        "thunder": 0,
        "water": 0,
    })

    const armorPieceArr = Object.keys(armorPieces);
    let newTotalStatState = {
        "defense": 0,
        "dragon": 0,
        "fire": 0,
        "ice": 0,
        "thunder": 0,
        "water": 0,
    };
    const updateTotalState = (
        armorPieceArr.forEach(armor => {
            if (armorPieces[armor]) {
                newTotalStatState.defense += armorPieces[armor].defense.base
                newTotalStatState.dragon += armorPieces[armor].resistances.dragon
                newTotalStatState.fire += armorPieces[armor].resistances.fire
                newTotalStatState.water += armorPieces[armor].resistances.water
                newTotalStatState.ice += armorPieces[armor].resistances.ice
                newTotalStatState.thunder += armorPieces[armor].resistances.thunder
            }
        })
    )

    useEffect(() => (
        setTotalStats(prevState => ({ ...prevState, ...newTotalStatState }))
    ), [armorPieces])

    return (
        <div>Total Stats
            Total Defense: {totalStats.defense}
            Total Fire Resistance {totalStats.fire}
            Total Water Resistance {totalStats.water}
            Total Thunder Resistance {totalStats.thunder}
            Total Ice Resistance {totalStats.ice}
            Total Dragon Resistance {totalStats.dragon}
        </div>
    )

}