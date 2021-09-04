import React from "react";
import { render } from "react-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <a href="https://github.com/literaiiy"><img height="32" width="32" src="https://unpkg.com/simple-icons@v5/icons/github.svg" /></a>
        <a href="https://last.fm/user/literaiiy"><img height="32" width="32" src="https://unpkg.com/simple-icons@v5/icons/lastdotfm.svg" /></a>
      </nav>
    )
  }
}

export default Navbar;