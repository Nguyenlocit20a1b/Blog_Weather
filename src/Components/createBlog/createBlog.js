
import React, { useEffect, useState } from 'react'
import './createBlog.css';
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';


function CreateBlog({ isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postCollectionRef = collection(db, "posts");
  
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
    });
    navigate("/")
    console.log("submited");
  }
  useEffect(() => {
    return () => {
      if (!isAuth)
        navigate("/login")
    };
  }, [])

  return (
    <div className='createBlog'>
      <div className='cpContainer'>
        <h1> Create A Blog </h1>
        <div className='inputGp'>
          <label> Title : </label>
          <input placeholder='Title ...' onChange={(event) => {
            setTitle(event.target.value);
          }} />

        </div>
        <div className='inputGp'>
          <label> Blog : </label>
          <textarea placeholder='Post ...' onChange={(event) => {
            setPostText(event.target.value);
          }}
          
          />
          
        </div>
        <button onClick={createPost}  > Submit Blog </button>
      </div>
    </div>
  )
}

export default CreateBlog