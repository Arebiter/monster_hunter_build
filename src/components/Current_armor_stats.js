import React from "react";
import { useState, useEffect } from "react";
import "../CSS_folder/Armor_images.scss";
import "../CSS_folder/Armor_stats.scss";


export const CurrentArmorStats = ({ currentArmorPiece }) => {
    const [currentArmorStats, setCurrentArmorStats] = useState({
        "defenses": {
            "defense": 0,
            "fire": 0,
            "water": 0,
            "thunder": 0,
            "ice": 0,
            "dragon": 0,
        },
        "rarity": 0,
        "name": "-"
    })
    const [currentArmorSkills, setCurrentArmorSkills] = useState({
        "skills": [
            {
                "skillName": "-",
                "level": 0
            }
        ]
    })

    const armorResistanceArr = Object.keys(currentArmorStats.defenses);
    const showArmorResistance = (
        armorResistanceArr.map((stat, idx) => (
            <div key={`${idx}-${stat}-current-defense`} className="armor-defense-type">
                <img className="stat-icon" src={require(`../icons/${stat}.png`)} />
                <div className="stat-data">
                    <p className="armor-defense-name">{stat === "defense" ? ("defense") : (`vs. ${stat}`)}</p>
                    <p className="armor-defense-value">{currentArmorStats.defenses[stat]}</p>
                </div>
            </div>
        ))
    )

    let newCurrentArmorStatsState = {}; //make a new object to replace the current armor stats
    const updateCurrentStats = (
        currentArmorPiece.armor !== "" ? ( //if there is a current armor chosen, fill out the object, else keep current armor stats
            newCurrentArmorStatsState = {
                "defenses": {
                    "defense": currentArmorPiece.armor.defense.base,
                    "dragon": currentArmorPiece.armor.resistances.dragon,
                    "fire": currentArmorPiece.armor.resistances.fire,
                    "ice": currentArmorPiece.armor.resistances.ice,
                    "thunder": currentArmorPiece.armor.resistances.thunder,
                    "water": currentArmorPiece.armor.resistances.water,
                },
                "rarity": currentArmorPiece.armor.rarity,
                "name": currentArmorPiece.armor.name
            }) : (currentArmorStats)
    )

    let newCurrentArmorSkillsState = {};
    const updateCurrentSkills = (
        currentArmorPiece.armor !== "" ? (
            newCurrentArmorSkillsState.skills =
            currentArmorPiece.armor.skills.map((skill) => ({
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
        <div className="stats-section">
            <div className="stats-border-top">
                <div className="border-top">
                    <img className="border-top-left-corner" src={require(`../icons/top_left_corner.png`)} />
                    <img className="border-top-line" src={require(`../icons/top_line.png`)} />
                    <img className="border-top-right-corner" src={require(`../icons/top_right_corner.png`)} />
                </div>
            </div>
            <div className="current-armor-name">
                <div>{currentArmorStats.name}</div>
                <div>Rarity {currentArmorStats.rarity}</div>
            </div>
            <div className="stats-list-section">
                <div className="stats-list">
                    {showArmorResistance}
                </div>
            </div>
            <div className="skills-section">
                <div className="title">Skills</div>
                <div className="section-skills">
                    {currentArmorSkills.skills.map(skill => (
                        <div className="skill">
                            <div className="skill-name">{skill.skillName}</div>
                            <div className="skill-level">
                                <div>Level bar</div>
                                <div>Level {skill.level}</div>
                            </div>
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