import React from "react";
import { render } from "react-dom";
import ScrollBarTop from "./scrollBarTop";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whiten: false,
    }
    this.myRef = React.createRef();
  }

  handleScroll = () => {
    if (this.myRef.current.offsetTop > (-50 + window.innerHeight)) {
      this.setState({whiten: true,})
    } else {
      this.setState({whiten: false,})
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <nav ref={this.myRef} onScroll={this.handleScroll} className={this.state.whiten ? "_bgBlur" : ""}>
        <ScrollBarTop color={this.state.whiten ? "gradientBg" : ""}/>
        <a className='titleFont _noselect' href='/'>
          <span className={`${this.state.whiten ? "whiteP" : "blackP"} titleFont`}><span className="_salt1">l</span>iteraiiy</span>
        </a>
        <div id='rightSideNav' className={`${this.state.whiten ? "whiteP" : "blackP"}`}>
          <a className='_noselect' target='_blank' href="https://github.com/literaiiy"><img height="32" width="32" src="https://unpkg.com/simple-icons@v5/icons/github.svg" /></a>
          <div id='navDot' className='_noselect'>·</div>
          <a className='_noselect _600'target='_blank' href="https://status.literaiiy.me">Status</a>
          <a className='_noselect _600' target='_blank' href="https://cl.literaiiy.me">Changelog</a>
        </div>
      </nav>
    )
  }
}

export default Navbar;