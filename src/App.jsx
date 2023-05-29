import './App.css'
import { useEffect, useState } from 'react';
import axios from "axios";

import PostsList from './components/PostsList';
import Form from './components/Form';


const App = () => {
  const [posts, setPosts] = useState([]);

  const url ="https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
       axios
      .get(url)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleCreatePost = (newPost) => {
    axios
      .post(url, newPost)
      .then(response => {
        setPosts([...posts, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleUpdatePost = (id, updatedPost) => {
    axios
      .put(`${url}/${id}`, updatedPost)
      .then(response => {
        const updatedPosts = posts.map(post => (post.id === id ? response.data : post));
        setPosts(updatedPosts);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeletePost = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then(() => {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPosts(updatedPosts);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleCreatePost} />
      <PostsList
        posts={posts}
        onUpdatePost={handleUpdatePost}
        onDeletePost={handleDeletePost}
      />
    </div>
  );
};

export default App;
