import React, { useState } from "react";
import Chevron from '../../Assets/chevron.svg';
import './Collapse.css'

export default function Collapse({title, id, texte, size ="m"}) {
const [display, setDisplay] = useState("none");
const [isActive, setIsActive] = useState("");
const [rotate, setRotate] = useState("180deg");


function inputCollapse(){
    setIsActive(isActive === "" ? "0deg" : "180deg");
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setDisplay(display === "block" ? "none" : "block");
}

    return (
        <div className={`collapse-container collapse-container-${size}`}>
            <div className="collapse-block" onClick={inputCollapse}>
                <h1 id="title">{title}</h1>
                <button>
                    <img
                        className="chevron"
                        src={Chevron}
                        style= {{ rotate : `${rotate}` }}
                        alt="chevron" />
                </button>
            </div>
            <div className={`texte ${isActive}`}
                key={id}
                style= {{ display: `${display}` }}
            >
                { texte }
            </div>
        </div>
    );

}

