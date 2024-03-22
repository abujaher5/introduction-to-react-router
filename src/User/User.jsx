import { Link } from "react-router-dom";

const User = ({ user }) => {
  const userStyle = {
    padding: "10px",
    borderRadius: "20px",
    border: "5px solid yellow",
  };
  const { id, name, email, phone } = user;
  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
