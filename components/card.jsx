import React from "react";
import { render } from "react-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let modal = document.getElementById('modal');
    let modalP = document.getElementById('modalP');
    let modalH2 = document.getElementById('modalH2');
  }

  handleMouseEnter() {
    let id = this.props.i;
    modal.style.opacity = "1";
    switch (this.props.i) {
      case "tbx":
        modalH2.textContent = 'literaiiy Toolbox'
        modalP.textContent = 'literaiiy Toolbox is a suite of web tools created with the intention of enhancing my programming skills.'
        break
      case "dah":
        modalH2.textContent = 'dah.li/a'
        modalP.textContent = 'dah.li/a is my personal blog, where I post about about a multitude of different topics- most prominently technology-related stuff.'
        break
      case "tir":
        modalH2.textContent = 'tiramisu'
        modalP.textContent = 'tiramisu is a player statistics site for the Minecraft server Hypixel that gives a comprehensive outlook of a player\'s profile.'
        break
      default:
        modalH2.textContent = '';
        modalP.textContent = '';
    }
  }

  handleMouseOut() {
    modal.style.opacity = "0";
  }

  render() {
    return (
      <a href={this.props.href} target="_blank">
        <div
        onPointerEnter={() => this.handleMouseEnter()}
        onPointerLeave={() => this.handleMouseOut()}
        className={`${this.props.i} card`} 
        style={{marginBottom: +this.props.yAdj +1 + 'rem'}}
        >
          {this.props.n}
        </div>
      </a>
    )
  }
}

export default Card;