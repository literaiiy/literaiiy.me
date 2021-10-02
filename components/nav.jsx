import React from "react";
import { render } from "react-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whiten: false,
    }
    this.myRef = React.createRef();
  }

  handleScroll = () => {
    if (this.myRef.current.offsetTop > (-100 + window.innerHeight)) {
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
      <nav ref={this.myRef} onScroll={this.handleScroll}>
        <a className='titleFont _noselect' href='/'>
          <span className={`${this.state.whiten ? "whiteP" : "blackP"} titleFont`}><span className="_salt1">l</span>iteraiiy</span>
        </a>
        <div className={`${this.state.whiten ? "whiteP" : "blackP"} rightSideNav`}>
          <a className='_noselect' target='_blank' href="https://github.com/literaiiy"><img height="32" width="32" src="https://unpkg.com/simple-icons@v5/icons/github.svg" /></a>
          <a className='_noselect' target='_blank' href="https://last.fm/user/literaiiy"><img height="32" width="32" src="https://unpkg.com/simple-icons@v5/icons/lastdotfm.svg" /></a>
          <div className='_noselect'>·</div>
          <a className='_noselect'target='_blank' href="https://status.literaiiy.me">Status</a>
          <a className='_noselect' target='_blank' href="https://cl.literaiiy.me">Changelog</a>
        </div>
      </nav>
    )
  }
}

export default Navbar;