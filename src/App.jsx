import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PostsList from "./components/PostsList";
import Form from "./Form";

function App() {
  const [posts, setPosts] = useState([]);

  console.log("Test:", posts);

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
        <h1>PostsList</h1>
        <Form url={url} testData={posts} setPosts={() => {}} />
        <div className="card-container">
          <PostsList postData={posts} />
        </div>
      </div>
    </>
  );
}

export default App;
