import React, { useState } from "react";
import Chevron from '../../Assets/chevron.svg';
import './Collapse.css'

export default function Collapse(props) {
const [display, setDisplay] = useState("none");
const [isActive, setIsActive] = useState("");
const [rotate, setRotate] = useState("180deg");

function inputCollapse(){
    setIsActive(isActive === "" ? "0deg" : "180deg");
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setDisplay(display === "block" ? "none" : "block");
}

    return (
        <div className="collapse-container">
            <div className="collapse-block" onClick={inputCollapse}>
                <h1 id="title">{props.title}</h1>
                <button>
                    <img
                        className="chevron"
                        src={Chevron}
                        style= {{ rotate : `${rotate}` }}
                        alt="chevron" />
                </button>
            </div>
            <div className={`texte ${isActive}`}
                key={props.id}
                style= {{ display: `${display}` }}
            >
                { props.texte }
            </div>
        </div>
    );

}

