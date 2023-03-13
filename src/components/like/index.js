import React, {useState} from "react";
import "./style.css"

const Like = () => {
    const icon = 'https://cdn-icons-png.flaticon.com/512/25/25424.png'
    const icon2 = 'https://cdn-icons-png.flaticon.com/512/3179/3179385.png'
    const [active, setActive] = useState(false)
    const [value, setValue] = useState(Math.floor(Math.random() * 100));
    const renderLike = () => {
       return <div className="likeButton" onClick={() => {setActive(true);setValue((prev) => prev + 1)}}><img  src={icon}></img><span>{value}</span>
        </div>
    }
    const renderUnLike = () =>{
        return <div className="likeButton" onClick={() => {setActive(false);setValue((prev) => prev - 1 )}}>
        <img  src={icon2}></img><span>{value}</span>
   </div>
    }
    
    return(
        <div>
            { !active ? renderLike() : renderUnLike()}
   </div>
    )
    }
export default Like
