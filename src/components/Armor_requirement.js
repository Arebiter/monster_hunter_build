import React from "react";
import { useState, useEffect } from "react";
import "../CSS_folder/Armor_requirements.scss";

export const ArmorRequirements = ({ currentArmorPiece }) => {
    let totalCost = 0;

    if (currentArmorPiece.armor === "") {
        return (
            <div className="armor-requirement-section">
                <div className="armor-piece-group">
                    < div > Armor Piece</div >
                    <div className="armor-piece-div">
                    </div>
                </div >
                <div>Armor Requirements</div>
                <div>Materials</div>
                <div>Required Cost - {totalCost} Z</div>
            </div >
        )
    }

    const { assets, crafting, name } = currentArmorPiece.armor;

    const materials = (
        crafting.materials.map((material, idx) => {
            totalCost += (material.quantity * material.item.value)
            return (
                <div key={`${idx}-${material.item.name}-${name}`} className="armor-material">
                    <div className="armor-material-name">{material.item.name}</div>
                    <div className="armor-material-quantity">X {material.quantity}</div>
                </div>
            )
        })
    )

    return (
        <div className="armor-requirement-section">
            <div className="armor-piece-group">
                <div>{name}</div>
                <div className="armor-piece-div">
                    <img src={assets !== "" ? (assets.imageMale) : null} />
                </div>
            </div>
            <div>Armor Requirements</div>
            <div className="armor-material-section">
                {materials}
            </div>
            <div className="armor-cost">
                <div>Required Cost</div>
                <div className="armor-money">
                    <div>icon</div>
                    <div>{totalCost} Z</div>
                </div>
            </div>
        </div>
    )

}