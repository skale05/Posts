import PostListItem from "./PostListItem";

const PostsList = ({ postData }) => {
  return (
    <div>
      <h1>PostsList</h1>
      <PostListItem testData={postData} />
    </div>
  );
};

export default PostsList;
