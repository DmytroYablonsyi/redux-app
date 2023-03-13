import React from 'react'
import './style.css'
import Images from '../components/image'
import Icon from '../components/icon'
import Like from '../components/like'
const Post = ({content, date,image, author}) => {
    const {name, nickname,photo} = author;
    return (
        <div className='post'>
            <div className='postHeader'> 
                <Icon source={author.photo}/>
                <p className='authorName'>{author.name}<img className='verifiedIcon' src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"/></p>
                <p>{author.nickname}</p>
                <p>{date}</p>
            </div>
            <div className='postBody'>
                <p className='content'>{content}</p>
                <Images source={image}/>
            </div>
            <div className='userDesk'>
                <img src='https://cdn-icons-png.flaticon.com/512/2951/2951100.png'></img>
                <Like/>
            </div>
               
        </div>       
    )
}
export default Post