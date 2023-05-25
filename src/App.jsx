import './App.css'
import {useEffect, useState } from 'react';
import axios from "axios";
import PostsList from './components/PostsList';


function App() {
  const [posts, setPosts] = useState([]);
  const url=("https://jsonplaceholder.typicode.com");
  
useEffect(() => {
  axios.get(url) 
  .then(function(response) {
    const result=response
    setPosts(result);
  })
  .catch(function(error){
    console.log(error);
  })
  .finally(function(){});
} [])


  return (
    <>
      <div>
        <PostsList data={posts}/>
      </div>

    </>
  )
}

export default App
