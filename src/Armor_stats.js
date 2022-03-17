import React from "react";
import { useState, useEffect } from "react";
import "../src/CSS_folder/Armor_images.scss";
import { CurrentArmorStats } from './Current_armor_stats';
import { TotalArmorStats } from './Total_armor_stats';


export const ArmorStats = ({ currentArmorPiece, armorPieces }) => {

    return (
        <div>
            <CurrentArmorStats currentArmorPiece={currentArmorPiece} />
            <TotalArmorStats armorPieces={armorPieces} />
        </div>
    )

}