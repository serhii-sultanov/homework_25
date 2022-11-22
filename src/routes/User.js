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
    <div>
      <Link to="/users">Show all users</Link>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <img src={user.image} alt={user.firstName}></img>
      <span>age: {user.age}</span>
      <span>height: {user.height}</span>
      <span>weight: {user.weight}</span>
    </div>
  );
};

export default User;
