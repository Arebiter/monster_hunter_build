import React from "react";
import { useState, useEffect } from "react";


export const ArmorSetList = ({ armorSets }) => {
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

    const lowRankArmorSets = (
        lowRank === undefined ? (null) : (
            lowRank.map(armor => {
                return <div>{armor.name}</div>
            })
        )
    )

    const highRankArmorSets = (
        highRank === undefined ? (null) : (
            highRank.map(armor => {
                return <div>{armor.name}</div>
            })
        )
    )

    const selectedRank = (
        rankSelect === false ? (lowRankArmorSets) : (highRankArmorSets)
    )



    return (
        <div>
            <div>Armor Sets</div>
            <label>
                <input type="radio" name="sort" id="role" onClick={() => setRankSelect(false)} />
                <p id="role" class="org-word second">Low Rank</p>
            </label>
            <label>
                <input type="radio" name="sort" id="role" onClick={() => setRankSelect(true)} />
                <p id="role" class="org-word second">High Rank</p>
            </label>
            <div>
                {selectedRank}
            </div>
        </div>
    )
};


