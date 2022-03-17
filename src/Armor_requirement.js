import React from "react";
import { useState, useEffect } from "react";
import "../src/CSS_folder/Armor_images.scss";



export const ArmorRequirements = ({ currentArmorPiece }) => {
    if (currentArmorPiece.armor === "") {
        return (
            <div>
                <div className="armor-piece-group">
                    <div>Armor Piece</div>
                    <div className="armor-piece-div">

                    </div>
                </div>
                <div>Armor Requirements</div>
                <div>Materials</div>
                <div>Required Cost</div>
            </div>
        )
    }

    const { assets, crafting, name } = currentArmorPiece.armor;

    const materials = (
        crafting.materials.map((material, idx) => {
            console.log(material);
            return (
                <div key={`${idx}-${material.item.name}-${name}`}>
                    <div>{material.item.name}</div>
                    <div>X {material.quantity}</div>
                </div>
            )
        })
    )

    return (
        <div>
            <div className="armor-piece-group">
                <div>{name}</div>
                <div className="armor-piece-div">
                    <img src={assets !== "" ? (assets.imageMale) : null} />
                </div>
            </div>
            <div>Armor Requirements</div>
            <div>
                {materials}
            </div>
        </div>
    )

}