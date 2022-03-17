import React from "react";
import { useState, useEffect } from "react";
import "../src/CSS_folder/Armor_images.scss";


export const ArmorImages = ({ armorPieces }) => {
    console.log(armorPieces);

    const { head, chest, gloves, waist, legs } = armorPieces;

    return (
        <div className="armor-images">
            <div className="armor-piece-group">
                <div>Head</div>
                <div className="armor-piece-div">
                    <img src={head !== "" ? (head.assets.imageMale) : null} />
                </div>
            </div>
            <div className="armor-chest-gloves-div">
                <div className="armor-piece-group">
                    <div>Chest</div>
                    <div className="armor-piece-div">
                        <img src={chest !== "" ? (chest.assets.imageMale) : null} />
                    </div>
                </div>
                <div className="armor-piece-group">
                    <div>Gloves</div>
                    <div className="armor-piece-div">
                        <img src={gloves !== "" ? (gloves.assets.imageMale) : null} />
                    </div>
                </div>
            </div>
            <div className="armor-piece-group">
                <div>Waist</div>
                <div className="armor-piece-div">
                    <img src={waist !== "" ? (waist.assets.imageMale) : null} />
                </div>
            </div>
            <div className="armor-piece-group">
                <div>Legs</div>
                <div className="armor-piece-div">
                    <img src={legs !== "" ? (legs.assets.imageMale) : null} />
                </div>
            </div>
        </div >
    )
}