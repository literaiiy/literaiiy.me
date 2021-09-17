import React from "react";
import { render } from "react-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }


  // handleMouseEnter() {
  //   let id = this.props.i;

  // }

  // handleMouseOut() {
  //   true
  // }

  render() {
    return (
      <a href={this.props.href} target="_blank">
        <div
        // onPointerEnter={() => this.handleMouseEnter()}
        // onPointerLeave={() => this.handleMouseOut()}
        className={`${this.props.i} card`} 
        style={{marginBottom: +this.props.yAdj +1 + 'rem'}}
        >
          <div className="cardInner">
            <div className="cardBack">
              <h2 class='cardH2'></h2>
              <p className="cardP"></p>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Card;