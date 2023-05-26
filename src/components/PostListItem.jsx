import React from "react";
import "./PostListItem.css";

const PostListItem = ({ testData }) => {
  //const handleEdit = (e) => {

  //const editedPost ={title, body};
  //     axios
  //       .put(url, value)
  //       .then(function (response) {
  //         setPosts(response);
  //       })
  return (
    //get rid of the classNames later
    <>
      <div className="list-items">
        <h2 className="d1">{testData.title}</h2>
        <p className="d2">{testData.body}</p>
        <p className="d3">{testData.userId}</p>
      </div>
    </>
  );
};

export default PostListItem;
