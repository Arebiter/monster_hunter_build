import React from "react";
import { useState, useEffect } from "react";
import "../CSS_folder/Armor_requirements.scss";

export const ArmorRequirements = ({ currentArmorPiece }) => {
    const [armorPic, setArmorPic] = useEffect({
        "image": ""
    });
    console.log(armorPic)
    const [armorMaterials, setArmorMaterials] = useEffect({
        "materials": []
    });
    const [armorName, setArmorName] = useEffect({
        "name": "Armor"
    });
    const [totalCost, setTotalCost] = useEffect(0);

    const { armor } = currentArmorPiece;
    let cost = 0
    useEffect(() => {
        setArmorPic(prevState => ({ ...prevState, image: armor.assets.imageMale }));
        setArmorMaterials(prevState => ({ ...prevState, materials: armor.crafting.materials }));
        setArmorName(prevState => ({ ...prevState, name: armor.name }));
    }, [armor])


    if (currentArmorPiece.armor === "") {
        return (
            <div className="armor-requirement-section">
                <div className="requirement-border-top">
                    <img className="requirement-border-top-left-corner" src={require(`../icons/alt_top_left_corner.png`)} />
                    <img className="requirement-border-top-left" src={require(`../icons/top_line.png`)} />
                    <img className="requirement-border-top-center" src={require(`../icons/top_center.png`)} />
                    <img className="requirement-border-top-right" src={require(`../icons/top_line.png`)} />
                    <img className="requirement-border-top-right-corner" src={require(`../icons/alt_top_right_corner.png`)} />
                </div>
                <div className="armor-piece-group down">
                    <div>Armor</div>
                    <div className="armor-piece-div">
                    </div>
                </div>
                <div className="requirement-border-mid">
                    <img className="requirement-border-top-left-corner" src={require(`../icons/top_left_corner.png`)} />
                    <img className="requirement-border-top-line" src={require(`../icons/top_line.png`)} />
                    <img className="requirement-border-top-right-corner" src={require(`../icons/top_right_corner.png`)} />
                </div>
                <div className="armor-material-group">
                    <div className="title">Required Materials</div>
                    <div className="armor-material-section">
                    </div>
                </div>
                <div className="requirement-border-bot">
                    <img className="requirement-border-top-left-corner" src={require(`../icons/top_left_corner.png`)} />
                    <img className="requirement-border-top-line" src={require(`../icons/top_line.png`)} />
                    <img className="requirement-border-top-right-corner" src={require(`../icons/top_right_corner.png`)} />
                </div>
                <div className="armor-cost">
                    <div className="title">Required Cost</div>
                    <div className="armor-money">
                        <img className="coin" src={require(`../icons/money.png`)} />
                        <div>0 z</div>
                    </div>
                </div>
                <div className="requirement-border-under">
                    <img className="requirement-border-top-left-corner" src={require(`../icons/bottom_left_corner.png`)} />
                    <img className="requirement-border-top-line" src={require(`../icons/top_line.png`)} />
                    <img className="requirement-border-top-right-corner" src={require(`../icons/bottom_right_corner.png`)} />
                </div>
            </div >
        )
    }
    const materials = (
        armorMaterials.length === 0 ? (null) : (
            armorMaterials.materials.map((material, idx) => {
                cost += (material.quantity * material.item.value)
                return (
                    <div key={`${idx}-${material.item.name}-${armorName}`} className="armor-material">
                        <div className="armor-material-name">{material.item.name}</div>
                        <div className="armor-material-quantity">X {material.quantity}</div>
                    </div>
                )
            })
        )
    )

    return (
        <div className="armor-requirement-section">
            <div className="requirement-border-top">
                <img className="requirement-border-top-left-corner" src={require(`../icons/alt_top_left_corner.png`)} />
                <img className="requirement-border-top-left" src={require(`../icons/top_line.png`)} />
                <img className="requirement-border-top-center" src={require(`../icons/top_center.png`)} />
                <img className="requirement-border-top-right" src={require(`../icons/top_line.png`)} />
                <img className="requirement-border-top-right-corner" src={require(`../icons/alt_top_right_corner.png`)} />
            </div>
            <div className="armor-piece-group down">
                <div>{armorName}</div>
                <div className="armor-piece-div">
                    {armorPic.image === "" ? (null) : (
                        <img src={armorPic.image} />
                    )}
                </div>
            </div>
            <div className="requirement-border-mid">
                <img className="requirement-border-top-left-corner" src={require(`../icons/top_left_corner.png`)} />
                <img className="requirement-border-top-line" src={require(`../icons/top_line.png`)} />
                <img className="requirement-border-top-right-corner" src={require(`../icons/top_right_corner.png`)} />
            </div>
            <div className="armor-material-group">
                <div className="title">Required Materials</div>
                <div className="armor-material-section">
                    {materials}
                </div>
            </div>
            <div className="requirement-border-bot">
                <img className="requirement-border-top-left-corner" src={require(`../icons/top_left_corner.png`)} />
                <img className="requirement-border-top-line" src={require(`../icons/top_line.png`)} />
                <img className="requirement-border-top-right-corner" src={require(`../icons/top_right_corner.png`)} />
            </div>
            <div className="armor-cost">
                <div className="title">Required Cost</div>
                <div className="armor-money">
                    <img className="coin" src={require(`../icons/money.png`)} />
                    <div>{totalCost} z</div>
                </div>
            </div>
            <div className="requirement-border-under">
                <img className="requirement-border-top-left-corner" src={require(`../icons/bottom_left_corner.png`)} />
                <img className="requirement-border-top-line" src={require(`../icons/top_line.png`)} />
                <img className="requirement-border-top-right-corner" src={require(`../icons/bottom_right_corner.png`)} />
            </div>
        </div>
    )

}