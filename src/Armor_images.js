import React from "react";
import { useState, useEffect } from "react";
import "../src/CSS_folder/Armor_set_list.scss";


export const ArmorImages = ({ armorPieces }) => {
    console.log(armorPieces);

    const { head, chest, gloves, waist, legs } = armorPieces;

    return (
        <div>
            <img src={head !== "" ? (head.assets.imageMale) : null} />
            <img src={chest !== "" ? (chest.assets.imageMale) : null} />
            <img src={gloves !== "" ? (gloves.assets.imageMale) : null} />
            <img src={waist !== "" ? (waist.assets.imageMale) : null} />
            <img src={legs !== "" ? (legs.assets.imageMale) : null} />
        </div>
    )
}