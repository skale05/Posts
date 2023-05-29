import React from 'react'
import PostListItem from './PostListItem';

const PostsList = ({ posts, onUpdatePost, onDeletePost }) => {
  return (
    <div>
      {posts.map(post => (
        <div>
          <h2>{post.id}</h2>
          <PostListItem
            key={post.id}
            post={post}
            onUpdatePost={onUpdatePost}
            onDeletePost={onDeletePost}
          />
        </div>
      ))}
    </div>
  );
};

export default PostsList