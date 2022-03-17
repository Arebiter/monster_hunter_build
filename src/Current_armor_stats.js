import React from "react";
import { useState, useEffect } from "react";
import "../src/CSS_folder/Armor_images.scss";



export const CurrentArmorStats = ({ currentArmorPiece }) => {
    const [currentArmorStats, setCurrentArmorStats] = useState({
        "defense": {
            "base": 0,
            "max": 0,
            "augmented": 0
        },
        "resistances": {
            "dragon": 0,
            "fire": 0,
            "ice": 0,
            "thunder": 0,
            "water": 0,
        },
        "rarity": 0
    })

    const [currentArmorSkills, setCurrentArmorSkills] = useState({
        "skills": [{
            "skillName": "-",
            "level": 0
        }]
    })

    let newCurrentArmorStatsState = {}; //make a new object to replace the current armor stats
    const updateCurrentStats = (
        currentArmorPiece.armor !== "" ? ( //if there is a current armor chosen, fill out the object, else keep current armor stats
            newCurrentArmorStatsState = {
                "defense": {
                    "base": currentArmorPiece.armor.defense.base,
                    "max": currentArmorPiece.armor.defense.max,
                    "augmented": currentArmorPiece.armor.defense.augmented
                },
                "resistances": {
                    "dragon": currentArmorPiece.armor.resistances.dragon,
                    "fire": currentArmorPiece.armor.resistances.fire,
                    "ice": currentArmorPiece.armor.resistances.ice,
                    "thunder": currentArmorPiece.armor.resistances.thunder,
                    "water": currentArmorPiece.armor.resistances.water,
                },
                "rarity": currentArmorPiece.armor.rarity
            }) : (currentArmorStats)
    )

    let newCurrentArmorSkillsState = {};
    const updateCurrentSkills = (
        currentArmorPiece.armor !== "" ? (
            newCurrentArmorSkillsState.skills =
            currentArmorPiece.armor.skills.map(skill => ({
                "skillName": skill.skillName,
                "level": skill.level
            }))
        ) : (currentArmorSkills)
    )

    useEffect(() => {//watch for change in current armor piece, update the information
        setCurrentArmorStats(prevState => ({ ...prevState, ...newCurrentArmorStatsState }))
        setCurrentArmorSkills(prevState => ({ ...prevState, ...newCurrentArmorSkillsState }))
    }, [currentArmorPiece])

    //get stats for current armor
    const listCurrentArmorStats = (
        <div>
            <div>
                <div>Rarity : {currentArmorStats.rarity}</div>
            </div>
            <div>
                <div>Defense</div>
                <div>
                    Base: {currentArmorStats.defense.base}
                    Max: {currentArmorStats.defense.max}
                    Augmented: {currentArmorStats.defense.augmented}
                </div>
            </div>
            <div>
                <div>Resistances</div>
                <div>
                    Vs. Fire: {currentArmorStats.resistances.fire}
                    Vs. Water: {currentArmorStats.resistances.water}
                    Vs. Thunder: {currentArmorStats.resistances.thunder}
                    Vs. Ice: {currentArmorStats.resistances.ice}
                    Vs. Dragon: {currentArmorStats.resistances.dragon}
                </div>
            </div>
            <div>
                <div>Skills</div>
                <div>
                    {currentArmorSkills.skills.map(skill => (
                        <div>
                            <div>{skill.skillName}</div>
                            <div>{skill.level}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {listCurrentArmorStats}
        </div>
    )


}