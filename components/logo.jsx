import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { render } from "react-dom";

class Logo extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     dotMe.textContent = ".com";
  //     dotMe.style.fontFamily = 'Yesteryear';
  //     setTimeout(() => {
  //       dotMe.textContent = ".xyz";
  //       dotMe.style.fontFamily = 'Nanum Brush Script';
  //       setTimeout(() => {
  //         dotMe.textContent = ".net";
  //         dotMe.style.fontFamily = 'Dancing Script';
  //         setTimeout(() => {
  //           dotMe.textContent = ".us";
  //           dotMe.style.fontFamily = 'Alex Brush';
  //           setTimeout(() => {
  //             dotMe.textContent = ".io";
  //             dotMe.style.fontFamily = 'Arizonia';
  //             setTimeout(() => {
  //               dotMe.textContent = ".eu";
  //               dotMe.style.fontFamily = 'Kristi';
  //               setTimeout(() => {
  //                 dotMe.textContent = ".me";
  //                 dotMe.style.fontFamily = 'Birthstone Bounce';
  //               }, 650)
  //             }, 200)
  //           }, 100)
  //         }, 75)
  //       }, 75)
  //     }, 100)
  //   }, 75)
  // }

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