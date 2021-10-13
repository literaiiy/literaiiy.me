import React, { Component } from "react";
import Navbar from '../components/nav.jsx'
import Card from '../components/card.jsx'
import Script from 'next/script'
import Contact from "../components/contact.jsx";
import Belt from "../components/belt.jsx";
import Image from 'next/image'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        {/* START */}
        {/* <ScrollBarTop/> */}
        <Navbar/>
        <main>
        <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"S3PC":[function(require,module,exports){var o=function(o){return Array.prototype.slice.call(document.querySelectorAll(o))},e=function(o){return o instanceof HTMLElement},t=function(o){return"[object String]"===Object.prototype.toString.call(o)},r=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.zIndex,d=void 0===n?1:n,c=r.diameter,a=void 0===c?80:c,i=r.borderWidth,l=void 0===i?1:i,s=r.borderColor,u=void 0===s?"#ddd":s,y=r.easing,b=void 0===y?4:y,v=r.background,x=void 0===v?"transparent":v,m=!1,p={x:0,y:0,o:1,d:a},f={x:0,y:0,o:0,d:a},g=document.createElement("div"),h=b/15;g.style="position:fixed;top:0;left:0;border-radius:100%;pointer-events:none;opacity:0;z-index:".concat(d,";height:").concat(a,"px;width:").concat(a,"px;background:").concat(x,";border:").concat(l,"px solid ").concat(u,";mix-blend-mode:exclusion;transition:background ").concat(h,"s,border ").concat(h,"s;will-change:transform"),document.addEventListener("mousemove",function(o){p.x=o.clientX,p.y=o.clientY,g.style.opacity=1,m||(document.body.append(g),f.x=p.x,f.y=p.y,m=!0,k())});var k=function o(){var e=p.x-f.x,t=p.y-f.y;f.x+=e/b,f.y+=t/b;var r="translate3d(".concat(f.x-f.d/2,"px,").concat(f.y-f.d/2,"px,0)");g.style.webkitTransform=r,g.style.transform=r;var n=p.o-f.o;f.o+=n/b,g.style.opacity=f.o;var d=p.d-f.d;f.d+=d/b,g.style.height=f.d+"px",g.style.width=f.d+"px";try{requestAnimationFrame(o)}catch(c){setImmediate(o)}};return g.over=function(r,n){var d=function(o){o.addEventListener("mouseover",function(o){n.background&&(g.style.backgroundColor=n.background),n.borderColor&&(g.style.borderColor=n.borderColor),n.scale&&(p.d=a*n.scale)}),o.addEventListener("mouseout",function(o){n.background&&(g.style.backgroundColor=x),n.borderColor&&(g.style.borderColor=u),n.scale&&(p.d=a)})};e(r)?d(r):t(r)&&o(r).forEach(d)},g};module.exports=r},{}],"WXAN":[function(require,module,exports){"use strict";var e=u(require(".."));function u(e){return e&&e.__esModule?e:{default:e}}window.curDot=e.default},{"..":"S3PC"}]},{},["WXAN"],null)
                  const cursor=curDot();
                  cursor.over('a',{scale:.5,background:'#fff',})
                  cursor.over('.titleFont',{scale:0.75,background:'#000',})

                  var bird = document.getElementsByClassName('bird');
                  new simpleParallax(bird, {
                    orientation: 'left'
                  });`,
        }} />
          <div id="ccc">
            <div id="cardList">
              <Card i='tbx' n='literaiiy Toolbox'
                    desc='literaiiy Toolbox is a collection of webtools created with the intention to provide people easy-to-use and useful (albeit sometimes obscure) utilities.'
                    yAdj='2' href='https://toolbox.literaiiy.me'
                    tags='flask sass'
                    beta/>
              <Card i='dah' n='dah.li/a'
                    desc="A personal blog, dah.li/a is a place where I post about a plethora of different topics; mainly smartphones, software, cool technology, and stuff like that— but occasionally other things, too! "
                    yAdj='0' href="https://dah.li/a"
                    tags='wordpress'/>
              <Card i='tir' n='tiramisu'
                    desc="tiramisu is a player statistics site for the popular 	&#34;Minecraft&#34; server Hypixel that gives a comprehensive outlook on a player's profile, reporting name history, game performance across multiple modes, information about the user, and more."
                    yAdj='1' href="https://tiramisu.vip" tags='flask tailwind sass'/>
              <Card n='' yAdj='2' tags=''/>
              <Card n='' yAdj='3' tags=''/>
              <Card n='' yAdj='2' tags=''/>
              <Card n='' yAdj='3' tags=''/>
            </div>
          </div>
          <img className='blackWave _noselect' draggable="false" onScroll={this.handleScroll} src="https://gist.githubusercontent.com/literaiiy/064651428d421610deb99734c6e57916/raw/b9b71c37e361e1015da5d50c3e21302b73516852/blackee.svg"/>
          <div className="blackness"> 
            <div>
              <div id='tagline'>
                <span className="tagline1"><b>M<span className="_cursive1">e</span>d<span className="_cursive1">io</span>cr<span className="_cursive1">e</span></b> web design.</span>
                <span className="tagline2"> Even more <b>m<span className="_cursive2">e</span>d<span className="_cursive2">io</span>cr<span className="_cursive2">e</span></b> web development.</span>
              </div>
              <Belt />
              <h2>About me</h2>
              <p>
                Hello! I am literaiiy, a high school student in the San Francisco Bay Area who enjoys working
                with technology-related things; mainly mobile devices, software, web design and development, 
                and much more. Having been fascinated by computers from a young age, I have accumulated years
                worth of knowledge but am always eager to learn more.
              </p>
              <p>
                literaiiy is a pseudonym I gave myself back in spring of 2018 as an intentionally spelt version
                of the word "literally". While appearing frequently in everyday conversation, it is 
                not usually used correctly strictly by definition, but more as hyperbole— a common word that has dulled due to 
                overuse.
              </p>
              <h2>
                About literaiiy.me
              </h2>
              <p>
                This is my landing page, the home and crossroads sign for my many projects, powered by Facebook's React framework and Vercel's Next.js metaframework.
                Occasionally things may be shifted around to my liking, so don't be alarmed if the entire website changes within a month. New projects may
                be added every now and then and displayed in the cards above if I'm cooking up some new stuff. Stay tuned!
              </p>
              <h2>Contact</h2>
              <Contact />
            </div>
          </div>
          <div>
            <div className="credits">
              <a href="https://nodejs.org/"><img src="https://gist.githubusercontent.com/literaiiy/0f8a22d56b24cb0357e22d15982bd446/raw/4fccc8eff284dd120d54a4734e297dbbfeb3fc14/toppng.com-node-js-logo-1902x512.svg" alt="Node.js" /></a>
              <a href="https://reactjs.org/"><img src="https://gist.githubusercontent.com/literaiiy/0f8a22d56b24cb0357e22d15982bd446/raw/4fccc8eff284dd120d54a4734e297dbbfeb3fc14/react-js-blog-header.svg" alt="React" /></a>
              <a href="https://nextjs.org/"><img src="https://gist.githubusercontent.com/literaiiy/0f8a22d56b24cb0357e22d15982bd446/raw/4fccc8eff284dd120d54a4734e297dbbfeb3fc14/Nextjs-logo.svg" alt="Next.js" /></a>
            </div>
          </div>
        </main>
        <footer>
          <div id='footerDiv'>
            <span>Copyright &#169; 2020-{new Date().getFullYear()} <span className='semibold'>literaiiy</span>. All rights reserved.</span>
            <span>Built with <a href='https://nextjs.org' className="semibold">Next.js</a>.</span>
            <span>Powered by <a href="https://vercel.com" className="semibold">Vercel</a>.</span>
            <br />
            <img src='https://gist.githubusercontent.com/literaiiy/b52115730334d1a5ffb2982cb51c74ce/raw/167b960705895571e8b4824d703168f937c142b8/icons8-dove-96.svg' id="svgBird"></img>
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/kursor@0.1.6/dist/kursor.min.js"></script>
        {/* END */}
      </div>
    )
  }
}
