import React from "react";
import { render } from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// const lastFm = <FontAwesomeIcon icon={faCoffee} />;

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <FontAwesomeIcon icon={faCoffee} />
      </nav>
    )
  }
}

export default Navbar;