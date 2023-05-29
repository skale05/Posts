import React from 'react'
import { useState } from 'react';
import axios from "axios";

const Form = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
  
      const newPost = {
        title: title,
        body: body,
        userId: userId
      };
  
      onSubmit(newPost);
      setTitle('');
      setBody('');
      setUserId('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={body} onChange={e => setBody(e.target.value)} placeholder="Body" />
        <input type="text" value={userId} onChange={e => setUserId(e.target.value)} placeholder="User ID" />
        <button type="submit">Submit</button>
      </form>
    );
  };
  


  export default Form