import PostListItem from "./PostListItem";
import "./PostList.css";

const PostsList = ({ postData }) => {
  // console.log(postData.data);
  return (
    <div className="card-container">
      {postData?.data?.map((post) => (
        <div key={post.id}>
          <PostListItem testData={post} />
        </div>
      ))}
    </div>
  );
};

export default PostsList;
