import React from "react";
import { render } from "react-dom";

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a href={this.props.href} target="_blank">
        <div className={`${this.props.i} card`} style={{marginBottom: +this.props.yAdj +1 + 'rem'}}>
          {this.props.n}
        </div>
      </a>
    )
  }
}

export default Card;