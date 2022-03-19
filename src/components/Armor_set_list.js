import React from "react";
import { useState, useEffect } from "react";
import "../CSS_folder/Armor_set_list.scss";

export const ArmorSetList = ({ armorSets, chooseArmorPiecesAndCurrentArmor }) => {
    //low rank
    const [lowRank, setLowRank] = useState();
    //high rank
    const [highRank, setHighRank] = useState();

    const [rankSelect, setRankSelect] = useState(false);

    const [selected, setSelected] = useState({
        "head": [false, -1],
        "chest": [false, -1],
        "gloves": [false, -1],
        "waist": [false, -1],
        "legs": [false, -1]
    })

    const click = (piece, idx) => {
        chooseArmorPiecesAndCurrentArmor(piece);
        if (selected[piece.type][0] === false) {
            selected[piece.type] = [true, idx];
        } else {
            selected[piece.type] = [false, -1];
        }
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
                return (
                    <div className="single-armor-set" key={`${idx}-${armor.name}`}>
                        <div className="armor-set-name">{armor.name}</div>
                        <div className="armor-set-pieces">
                            {piecesArray.map((piece, idx) => {
                                return piece !== "" ? (
                                    <div className="armor-set-piece-unit" key={`${idx}-${armor.name}-${piece.type}`}>
                                        <img className="armor-set-piece-unit-img"
                                            src={selected[piece.type][0] && idx === selected[piece.type][1] ? (
                                                require(`../icons/${piece.type}_select.png`)
                                            ) : (
                                                require(`../icons/${piece.type}.png`)
                                            )}
                                            onClick={() => click(piece, `${idx}-${armor.name}-${piece.type}`)}
                                        />
                                    </div>
                                ) : (
                                    <div className="armor-set-piece-unit" key={`${idx}-${armor.name}-non`}>
                                        <img className="armor-set-piece-unit-img" src={require('../icons/no_armor.png')} />
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
                <img className="armor-sets-border-top-left-corner" src={require(`../icons/top_left_corner.png`)} />
                <img className="armor-sets-border-top-line" src={require(`../icons/top_line.png`)} />
                <img className="armor-sets-border-top-right-corner" src={require(`../icons/top_right_corner.png`)} />
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


