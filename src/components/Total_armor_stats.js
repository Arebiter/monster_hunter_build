import React from "react";
import { useState, useEffect } from "react";
import "../CSS_folder/Armor_stats.scss";


export const TotalArmorStats = ({ armorPieces }) => {
    const [totalStats, setTotalStats] = useState({
        "defense": 0,
        "fire": 0,
        "water": 0,
        "thunder": 0,
        "ice": 0,
        "dragon": 0,
    })
    const armorPieceArr = Object.keys(armorPieces);
    const totalStatsArr = Object.keys(totalStats);
    const showTotalStats = (
        totalStatsArr.map((stat, idx) => (
            <div key={`${idx}-${stat}-defense`} className="armor-defense-type">
                <img className="stat-icon" src={require(`../icons/${stat}.png`)} />
                <div className="stat-data">
                    <p className="armor-defense-name">{stat === "defense" ? ("defense") : (`${stat} defense`)}</p>
                    <p className="armor-defense-value">{totalStats[stat]}</p>
                </div>
            </div>
        ))
    )

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
        <div className="stats-section down">
            <div className="title">Total Defense Status</div>
            <div className="stats-list">
                {showTotalStats}
            </div>
        </div>
    )

}