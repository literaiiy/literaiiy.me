import React from "react";
import { render } from "react-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tagsList = [];
    // function getLinks(str) {
      let tagsArr = [];
      if (this.props.tags) { tagsArr = this['props']['tags'].split(' '); }
      for (let i of tagsArr) {
        tagsList.push(<Tag i={i}/>)
      }
    // }
    
    return (
      <a href={this.props.href} className='rellax' data-rellax-speed='2' target="_blank">
        <div 
        className={`${this.props.i} card`} 
        style={{marginBottom: +this.props.yAdj +2 + 'rem'}}>
          <div id={`${this.props.i}Desc`} className="cardOverlay">
            <div className="cardInside">
              <div>
                <div className="cardHeading">{this.props.n}</div>
                <p className="_14px">{this.props.desc}</p>
              </div>
              <div className="cardTagList">{tagsList}</div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

class Tag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let aliases = {
      'flask': ["https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/flask.svg", "https://flask.palletsprojects.com/en/2.0.x/"],
      'react': ["https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/react.svg", "https://reactjs.org/"],
      'nextjs': ["https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/next-dot-js.svg", "https://nextjs.org/"],
      'sass': ["https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/sass.svg", "https://sass-lang.com/"],
      'tailwind': ["https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/tailwindcss.svg", "https://tailwindcss.com/"],
      'wordpress': ["https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/wordpress.svg", "https://wordpress.org"]
    }

    return (
      <a href={aliases[this.props.i][1]}>
        <img className='cardTagIcon' src={aliases[this.props.i][0]} alt={aliases[this.props.i][1]} />
      </a>
    )
  }
}


export default Card;
