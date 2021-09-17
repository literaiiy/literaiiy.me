import React from "react";
import { render } from "react-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        <a href="/"><img class='svgLogo' src="https://gist.githubusercontent.com/literaiiy/bce8dff7c669852332aa67141a76a49f/raw/2615806b6118b62d34b43645f9686e9e2b6f8c08/literaiiylogoblack.svg" alt="logo" /></a>
        <div class='rightSideNav'>
          <a class='_noselect' target='_blank' href="https://github.com/literaiiy"><img height="32" width="32" src="https://unpkg.com/simple-icons@v5/icons/github.svg" /></a>
          <a class='_noselect' target='_blank' href="https://last.fm/user/literaiiy"><img height="32" width="32" src="https://unpkg.com/simple-icons@v5/icons/lastdotfm.svg" /></a>
          <div class='_noselect'>·</div>
          <a class='_noselect'target='_blank' href="https://status.literaiiy.me">Status</a>
          <a class='_noselect' target='_blank' href="https://cl.literaiiy.me">Changelog</a>
        </div>
      </nav>
    )
  }
}

export default Navbar;