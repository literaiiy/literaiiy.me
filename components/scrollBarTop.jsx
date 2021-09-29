import React from "react";
import { render } from "react-dom";

class ScrollBarTop extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    window.onscroll = function() {myFunction()};

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("scrollBar").style.width = scrolled + "%";
    }
  }

  render() {
    return (
      <div className='scrollContainer'>
        <div className="scrollBar" id='scrollBar'></div>
      </div>
    )
  }
}

export default ScrollBarTop;