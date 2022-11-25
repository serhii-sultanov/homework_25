import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-box">
      <p className="error-text">Ooops, something went wrong</p>
      <h2 className="error-code">404</h2>
      <Link to="/" className="back-link">
        Back to Home page
      </Link>
    </div>
  );
};

export default NotFound;
