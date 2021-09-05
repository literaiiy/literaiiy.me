import React from "react";
import { render } from "react-dom";
import Navbar from '../components/nav.jsx'

class Card extends React.Component {
  render() {
    return (
      <div class='card' style={{marginBottom: +this.props.yAdj +1 + 'rem'}}>
        {this.props.n}
      </div>
    )
  }
}

export default Card;