import React from "react";
import './style.css'

const Images = (props) => {
    return (
        <img className="profileImage" src={props.source}/>
    )
}
export default Images