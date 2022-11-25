import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getUsersById } from "../api";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsersById(userId).then((data) => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="user-box">
      <img src={user.image} alt={user.firstName}></img>
      <div className="user-info">
        <h3 className="user-heading">
          {user.firstName} {user.lastName}
        </h3>
        <span className="user-details">age: {user.age}</span>
        <span className="user-details">height: {user.height}</span>
        <span className="user-details">weight: {user.weight}</span>
        <Link to="/users" className="back-link">
          Show all users
        </Link>
      </div>
    </div>
  );
};

export default User;
