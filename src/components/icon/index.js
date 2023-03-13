import React from "react";
import './style.css'

const Icon = (props) => {
    return(
        <img className='authorIcon' src={props.source}/>
    )
}
export default Icon