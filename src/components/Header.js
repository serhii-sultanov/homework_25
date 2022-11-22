import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "active-home-link" : "home-link"
        }
      >
        Home
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="hotels"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Hotels
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
