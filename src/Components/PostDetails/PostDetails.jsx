import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { postId } = useParams();
  const navigate = useNavigate();
  const { id, title, body } = post;
  console.log(postId);

  const handleGoBack = () => {
    // navigate(`/posts`);
    navigate(-1);
  };
  return (
    <div>
      <h3>Post details about:{id}</h3>
      <p>Title:{title}</p>
      <p>
        <small>{body}</small>
        <button onClick={handleGoBack}>Go back</button>
      </p>
    </div>
  );
};

export default PostDetails;
