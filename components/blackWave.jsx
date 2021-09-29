import React from "react";
import { render } from "react-dom";

class BlackWave extends React.Component {
  constructor(props) {
    super(props)
  }   

  handleScroll() {
    console.log(ref.current.getClientBoundingRect())
  }

  render() {
    const refd = useRef();

    console.log(window.innerHeight)
    return (
      <img className='blackWave _noselect' ref={refd} onScroll={this.handleScroll} src="https://gist.githubusercontent.com/literaiiy/064651428d421610deb99734c6e57916/raw/b9b71c37e361e1015da5d50c3e21302b73516852/blackee.svg"/>
    )
  }
}

export default BlackWave;