import React, { useState, useEffect } from "react";
import axios from "axios";

function Form({ url, testData, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  // useEffect(() => {
  //   setPosts(testData.data);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      userId,
    };

    axios.post(url, newPost).then((response) => {
      const post = response.data;
      const updatedPosts = [...testData?.data, post];
      setPosts(updatedPosts);
      setTitle("");
      setBody("");
      setUserId("");

      console.log(updatedPosts);
    });
  };

  // const handleChange = (e) => {
  //   setValue({e.target.value})
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          className="input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <br />
        <label htmlFor="userId">User Id:</label>
        <input
          type="text"
          className="input"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <br />
        <button type="submit">Creat a new post</button>
      </form>
    </div>
  );
}
export default Form;
