import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Link to="/">Back to Home page</Link>
      <p>Ooops, something went wrong</p>
      <h1>404</h1>
    </>
  );
};

export default NotFound;
