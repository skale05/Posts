import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PostsList from "./components/PostsList";

function App() {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  // console.log(posts);
  useEffect(() => {
    axios
      .get(url)
      .then(function (response) {
        setPosts(response);
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <>
      <div>
        <PostsList postData={posts} />
      </div>
    </>
  );
}

export default App;
