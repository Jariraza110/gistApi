import React from "react";
import Octicon from "react-octicon";
import Search from "./Search";
import "./Header.css";
function Header({ setGist }) {
  return (
    // Wrapping the search component and icons with header component 
    <div className="header-container">
      <Octicon name="mark-github"  mega />
      <Search setGist={setGist} />
    </div>
  );
}
export default Header;
