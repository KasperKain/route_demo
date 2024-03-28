import "./nav.css";

import { Link } from "react-router-dom";

export default () => {
  return (
    <ul className="navigation">
      <Link to="/">page one</Link>
      <Link to="/two">page two</Link>
      <Link to="/three">page three</Link>
    </ul>
  );
};
