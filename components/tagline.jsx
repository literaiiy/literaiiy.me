import React from "react"

export default class Tagline extends React.Component {


  render() {
    return (
    <div id='taglineWrapper'>
      <h1 id='tagline'>
        <span className="tagline1"><b>M<span className="_cursive1">e</span>d<span className="_cursive1">io</span>cr<span className="_cursive1">e</span></b> web design.</span>
        <span className="tagline2"> Even more <b>m<span className="_cursive2">e</span>d<span className="_cursive2">io</span>cr<span className="_cursive2">e</span></b> web development.</span>
      </h1>
    </div>
    )
  }
}