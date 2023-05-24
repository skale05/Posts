import React, { useState } from "react";

const PostListItem = (props) => {
  console.log(props.testData);

  return (
    <div>
      <h1>PostListItem</h1>
      {props.testData.map((post) => {
        <h2>{post.title}</h2>;
      })}
    </div>
  );
};

export default PostListItem;
