import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const postStyle = {
    padding: "10px",
    borderRadius: "20px",
    border: "5px solid green",
  };

  return (
    <div style={postStyle}>
      <h4>Post of Id:{id}</h4>
      <p>{title}</p>

      <Link to={`/post/${id}`}>Post Details</Link>
      <Link>
        <button to={`/post/${id}`}>Show Details</button>
      </Link>
    </div>
  );
};

export default Post;
