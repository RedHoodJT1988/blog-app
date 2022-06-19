import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <h1>Blog Site</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
