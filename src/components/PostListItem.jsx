import React from 'react'
import axios from "axios";
import { useState } from 'react';

const PostListItem = ({ post, onUpdatePost, onDeletePost }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = () => {
      const updatedPost = {
        id: post.id,
        title: title,
        body: body,
        userId: post.userId
      };
  
      onUpdatePost(post.id, updatedPost);
      setIsEditing(false);
    };
  
    const handleDelete = () => {
      onDeletePost(post.id);
    };
  
    return (
      <div>
        {isEditing ? (
          <div>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea value={body} onChange={e => setBody(e.target.value)} />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    );
  };
export default PostListItem

