import React from "react";
import { useState, useEffect } from "react";
import "../CSS_folder/Armor_images.scss";


export const ArmorRequirements = ({ currentArmorPiece }) => {
    let totalCost = 0;

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
                <div>Required Cost - {totalCost} Z</div>
            </div>
        )
    }

    const { assets, crafting, name } = currentArmorPiece.armor;

    const materials = (
        crafting.materials.map((material, idx) => {
            totalCost += (material.quantity * material.item.value)
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
            <div>Required Cost - {totalCost} Z</div>
        </div>
    )

}