import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { render } from "react-dom";

class Logo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1 className='fpLogo'>
        <span id="litLogo">literaiiy</span>
        <span id='dotMe'>.me</span>
      </h1>
    )
  }
}

export default Logo;