import Post from './post';
import { createPost } from './actions/postActions';
import { useSelector, useDispatch } from 'react-redux';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [contents,setContents] = useState(" ");
  const [picture,setPicture] = useState(" ");
  const [name,setName] = useState(" ");
  const [avatar, setAvatar] = useState(" ")
  const postsData = useSelector(({postList}) => postList.posts)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className='form'>
          <form>
            <input placeholder="what's on your mind" onChange={(e) => setContents(e.target.value)}></input>
            <input placeholder="Your image (url)" onChange={(e) => setPicture(e.target.value)}></input>
            <input placeholder="Your avatar (url)" onChange={(e) => setAvatar(e.target.value)}></input>
            <label className='select'>choose your character<select onChange={(e) => setName(e.target.value)}>
                <option></option>
                <option>Anakin Skywalker</option>
                <option>Obi-Wan Kenobi</option>
                <option>R2-D2</option>
                <option>Luck Skywalker</option>

            </select></label>
          </form>
          <button className='button' onClick={() => dispatch(createPost({contents, picture, name, avatar}))}>Add post</button>
      </div>
      {postsData.map((person) => {
        return <Post {...person}/>
     })}
    </div>
  );}
  export default App;