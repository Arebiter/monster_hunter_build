import React from "react";
import { useState, useEffect } from "react";
import "../CSS_folder/Armor_set_list.scss";

export const ArmorSetList = ({ armorSets, chooseArmorPiecesAndCurrentArmor }) => {
    //low rank
    const [lowRank, setLowRank] = useState();
    //high rank
    const [highRank, setHighRank] = useState();

    const [rankSelect, setRankSelect] = useState(false);

    const click = (piece) => {
        chooseArmorPiecesAndCurrentArmor(piece);
    }

    useEffect(() => {
        const lowRankSets = armorSets.filter(armor => armor.rank === "low")
        const lowRankAssetFilter = lowRankSets.filter(armor => armor.pieces.some(piece => piece.assets !== null))
        setLowRank(
            lowRankAssetFilter
        )

        const highRankSets = armorSets.filter(armor => armor.rank === "high")
        const highRankAssetFilter = highRankSets.filter(armor => armor.pieces.some(piece => piece.assets !== null))
        setHighRank(
            highRankAssetFilter
        )
    }, [armorSets])

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
                return (
                    <div className="single-armor-set" key={`${idx}-${armor.name}`}>
                        <div className="armor-set-name">{armor.name}</div>
                        <div className="armor-set-pieces">
                            {piecesArray.map((piece, idx) => {
                                return piece !== "" ? (
                                    <div
                                        className="armor-set-piece-unit"
                                        key={`${idx}-${armor.name}-${piece.type}`}
                                        piece={piece}>
                                        <img className="armor-set-piece-unit-img"
                                            src={require(`../icons/${piece.type}.png`)}
                                            alt={"no armor found"}
                                            onClick={() => click(piece)} />
                                    </div>
                                ) : (
                                    <div className="armor-set-piece-unit" key={`${idx}-${armor.name}-${piece.type}-non`}>
                                        <img className="armor-set-piece-unit-img" src={require('../icons/no_armor.png')} alt={"no armor"} />
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                )
            })
        )
    )

    return (
        <div className="armor-sets-section">
            <div className="armor-sets-border-top">
                <img className="armor-sets-border-top-left-corner" src={require(`../icons/top_left_corner.png`)} alt={""} />
                <img className="armor-sets-border-top-line" src={require(`../icons/top_line.png`)} alt={""} />
                <img className="armor-sets-border-top-right-corner" src={require(`../icons/top_right_corner.png`)} alt={""} />
            </div>
            <div className="title">Armor Sets</div>
            <div className="rank-choice">
                <label className="rank-label">
                    <p id="low-rank" className={rankSelect ? "rank-word" : "rank-word select"} onClick={() => setRankSelect(false)}>Low Rank</p>
                </label>
                <label className="rank-label">
                    <p id="high-rank" className={rankSelect ? "rank-word select" : "rank-word"} onClick={() => setRankSelect(true)}>High Rank</p>
                </label >
            </div>
            <div className="armor-set-list">
                {rankArmorSets}
            </div>
        </div>
    )
};


