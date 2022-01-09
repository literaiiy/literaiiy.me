import React from "react"

export default class Tagline extends React.Component {


  render() {
    return (
    <div id='taglineWrapper'>
      <h1 id='tagline'>
        <span className="tagline1">
          <div class='taglineFlex'>
            <span>
              <span className="_cursive1">Authentically passionate{" "}</span>
              <span>web development & design.</span>
            </span>
            <svg class="underlineSvg">
              <path className="underlineh1" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M 17.289 23.786 C 51.876 32.629 204.349 13.789 297.15 19.56 C 303.725 19.973 311.749 21.978 310.897 25.585 C 228.936 27.337 162.367 25.169 81.137 31.352 C 81.137 31.352 141.541 33.783 191.697 33.973 C 216.54 34.067 258.895 35.787 300.423 41.249"></path>
            </svg>
          </div>
        </span>

      </h1>

    </div>
    )
  }
}