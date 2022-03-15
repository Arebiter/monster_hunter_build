import React from "react";
import { useState, useEffect } from "react";


export const ArmorSetList = ({ armorSets }) => {
    //low rank
    const [lowRank, setLowRank] = useState();
    //high rank
    const [highRank, setHighRank] = useState();
    // if (armorSets === "") {
    //     return null;
    // }
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

    return (
        <div>
            <div>
                {lowRankArmorSets}
            </div>
            <div>
                {highRankArmorSets}
            </div>
        </div>
    )
};


