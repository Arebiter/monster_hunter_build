import React from "react";
import { useState, useEffect } from "react";
import "../CSS_folder/Armor_images.scss";


export const ArmorImages = ({ armorPieces }) => {


    const { head, chest, gloves, waist, legs } = armorPieces;

    return (
        <div className="armor-images-section">
            <div className="armor-piece-group">
                <div className="armor-piece-name">
                    {head ? (head.name) : "Head"}
                </div>
                <div className="armor-piece-div">
                    <img src={head ? (head.assets.imageMale) : null} />
                </div>
            </div>
            <div className="armor-chest-gloves-div">
                <div className="armor-piece-group">
                    <div className="armor-piece-name">
                        {chest ? (chest.name) : "Chest"}
                    </div>
                    <div className="armor-piece-div">
                        <img src={chest ? (chest.assets.imageMale) : null} />
                    </div>
                </div>
                <div className="armor-piece-group">
                    <div className="armor-piece-name">
                        {gloves ? (gloves.name) : "Gloves"}
                    </div>
                    <div className="armor-piece-div">
                        <img src={gloves ? (gloves.assets.imageMale) : null} />
                    </div>
                </div>
            </div>
            <div className="armor-piece-group">
                <div className="armor-piece-name">
                    {waist ? (waist.name) : "Waist"}
                </div>
                <div className="armor-piece-div">
                    <img src={waist ? (waist.assets.imageMale) : null} />
                </div>
            </div>
            <div className="armor-piece-group">
                <div className="armor-piece-name">
                    {legs ? (legs.name) : "Legs"}
                </div>
                <div className="armor-piece-div">
                    <img src={legs ? (legs.assets.imageMale) : null} />
                </div>
            </div>
        </div >
    )
}