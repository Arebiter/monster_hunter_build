import React from "react";
import { useState, useEffect } from "react";
import "../CSS_folder/Skill_bar.scss"


export const SkillLevelBar = ({ skillLevel }) => {

    console.log(skillLevel)
    let skillLevelArr = Array(skillLevel).fill("x");
    return (
        <div className="skill-bar">
            <div className="skill-bar-start">
                <img src={require(`../icons/skill_start.png`)} />
            </div>
            {skillLevelArr.map((block, idx) => (
                <div key={idx} className="skill-box"></div>
            )
            )}
            <div className="skill-bar-start">
                <img src={require(`../icons/skill_end.png`)} />
            </div>
        </div>
    )
}