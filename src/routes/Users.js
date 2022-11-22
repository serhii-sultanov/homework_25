import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      {users.map(({ id, firstName, lastName, email, phone }) => (
        <tr key={id}>
          <td>
            {firstName} {lastName}
          </td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>
            <Link to={`${id}`} className="user-link">
              Show more
            </Link>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Users;
