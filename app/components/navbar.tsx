import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div>
      <NavLink to="/">
        <span>
          Countries<span>Explorer</span>
        </span>
      </NavLink>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/countries">Countries</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
}
