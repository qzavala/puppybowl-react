import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div id="NavBar">
      <Link to={"/"}>Home</Link>
      <Link to={"/NewPlayerForm"}>New Player Form</Link>
      <Link to={"/PlayerSearch"}>Player Search</Link>
    </div>
  );
}
