import React, { Component } from "react";
import Head from 'next/head'
import Navbar from '../components/nav.jsx'
import Card from '../components/card.jsx'
import Script from 'next/script'
import Contact from "../components/contact.jsx";
import Belt from "../components/belt.jsx";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        {/* START */}
        <Head>
          {/* Title */}
          <title>Home - literaiiy.me</title>
          {/* Stylesheets */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="http://fonts.cdnfonts.com/css/beattingvile" rel="stylesheet" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Rozha+One&family=Devonshire&family=Yesteryear&family=Nanum+Brush+Script&family=Dancing+Script&family=Alex+Brush&family=Arizonia&family=Kristi&family=Birthstone+Bounce&family=DM+Serif+Display:ital@0;1&display=swap" />
          {/* Meta tags */}
          <meta name="title" content="Home - literaiiy.me"/>
          <meta name="description" content="Hello! I am literaiiy (styled lowercase), a smartphone, web development & design, computer, and many-other-things enthusiast residing in the Bay Area."/>
          <meta name="keywords" content="literaiiy, toolbox, tiramisu, dah.li/a"/>
          <meta name="robots" content="index, follow"/>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English"/>
          <meta name="author" content="literaiiy"/>
          {/* Scripts & Libraries */}
          <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"></script>
        </Head>
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
                    tags='flask sass'/>
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
                not usually used correctly strictly by definition, but more as hyperbole; a common word that has dulled due to 
                overuse.
              </p>
              <p>
                This is my landing page, the home and crossroads sign for my many projects, powered by Facebook's
                React framework and Vercel's Next.js metaframework.
              </p>
              <h2>
                About literaiiy.me
              </h2>
              <p>
                {/* literaiiy.me was originally built in Webflow back in November 2020 and was a simple webpage that hosted 
                a few links to some of the sites I was planning to create in the future. At the start of the new year, I decided
                that an upgrade was needed— an thus, I moved it over to WordPress hosted on a little VPS I had bought a few weeks prior.
                With WordPress comes a nice content management system and a wide array of plugins and features allowing one to create
                quite a nice-looking website, but the lack of full customizability and the notorious reputation of insecurity that comes with
                a beginner-friendly site creator written in PHP drove me off. In September of 2021, I turned to re-building my site 
                using React and Next.js,  */}

              </p>
              <h2>Contact</h2>
              <Contact />
              {/* <h2>Why JavaScript is the end-all for humanity</h2>
              <p>JavaScript, commonly referred to as the Mississipiian sewer rat, is one of the most
                prominent "computer programming langyages" currently being used by avid programmers.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique vehicula tincidunt. Quisque eu sollicitudin nibh. Quisque at purus eu odio bibendum vulputate sollicitudin vitae risus. Morbi id feugiat ligula. Proin vel pellentesque nunc, vitae molestie neque. In quis bibendum tortor, a ultrices urna. Quisque lobortis venenatis iaculis. Donec mi ex, mollis id sapien quis, ultricies ultricies ex. Sed vel pretium ligula. Ut ultricies elit non faucibus dictum.
              </p>
              <h2>So you bought a Node.js... what now?</h2>
              <p>Nunc malesuada venenatis massa ut posuere. Aliquam sit amet sem eu felis cursus sollicitudin eu sed felis. Fusce ut massa nulla. Praesent at enim lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi commodo rutrum varius. Curabitur pulvinar vehicula lacus, quis posuere nisl pellentesque eget. Phasellus consequat odio sit amet ultrices euismod. Praesent pellentesque commodo velit. Donec condimentum augue in gravida gravida. Mauris ultricies pharetra lectus at commodo. Etiam pretium diam et nunc bibendum commodo. Duis sed est quis nibh ornare efficitur. Vivamus volutpat rutrum risus et pretium.
                Be sure to water your Node.js every few months to make sure that its bone structure stays intact and doesn't spontaneously blow up your house.
              </p>
              <h2>Top 10 Programming Languages that Aren't C++</h2>
              <p>
                C++ is one of the worst programming languages out there, being the name of a soda brand. Here are the top 10 reasons to hate C++. In in faucibus dolor. Fusce molestie placerat facilisis. Maecenas eu porta lacus. Proin lectus purus, porta a faucibus eget, tristique sed nunc. Sed consequat, urna a malesuada tempor, sapien neque euismod tellus, et ultricies libero ex sed sem. Fusce malesuada egestas tellus cursus volutpat. Nulla facilisi. In eu dictum eros, ullamcorper efficitur mauris. Proin ac vehicula sapien, a condimentum orci. Aenean et elementum sem, eget finibus sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque id mattis nulla. Aenean rutrum dui nec lectus laoreet tincidunt. And that's it for today. Stay tuned next week when we take an in-depth look at Ruby on Rails.
              </p>
              <h2>
                Plants, Python, Anacondas, and why Microsoft is secretly trying to colonize Africa
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam felis, rhoncus non rhoncus et, efficitur aliquet nibh. Etiam nunc ipsum, mattis quis arcu quis, gravida hendrerit odio. Fusce ac ornare arcu. Pellentesque sollicitudin elit non leo lacinia, in tincidunt erat vehicula. Mauris feugiat nunc velit, at ultricies ante interdum in. Aliquam pellentesque varius nulla, non varius tortor blandit quis. Curabitur faucibus augue ex, volutpat venenatis libero finibus et. Fusce vehicula metus id dolor sodales egestas. Morbi vehicula libero non augue tristique, et tincidunt arcu sodales. Mauris porta turpis eleifend ante malesuada, eu finibus urna elementum. Nulla congue est quis sapien maximus, et placerat nisl lacinia. Maecenas fringilla lectus sed augue aliquam, eget scelerisque ipsum pellentesque.</p>
              <p>Despite all the negative press release, Microsoft has shown no interest in stopping. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam felis, rhoncus non rhoncus et, efficitur aliquet nibh. Etiam nunc ipsum, mattis quis arcu quis, gravida hendrerit odio. Fusce ac ornare arcu. Pellentesque sollicitudin elit non leo lacinia, in tincidunt erat vehicula. Mauris feugiat nunc velit, at ultricies ante interdum in. Aliquam pellentesque varius nulla, non varius tortor blandit quis. Curabitur faucibus augue ex, volutpat venenatis libero finibus et. Fusce vehicula metus id dolor sodales egestas. Morbi vehicula libero non augue tristique, et tincidunt arcu sodales. Mauris porta turpis eleifend ante malesuada, eu finibus urna elementum. Nulla congue est quis sapien maximus, et placerat nisl lacinia. Maecenas fringilla lectus sed augue aliquam, eget scelerisque ipsum pellentesque.</p>
              <h2>Eating the new iPhone 6s</h2>
              <p>
                The new Samsung iPhone 6s is a real technological marvel. Marvel Studios. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam felis, rhoncus non rhoncus et, efficitur aliquet nibh. Etiam nunc ipsum, mattis quis arcu quis, gravida hendrerit odio. Fusce ac ornare arcu. Pellentesque sollicitudin elit non leo lacinia, in tincidunt erat vehicula. Mauris feugiat nunc velit, at ultricies ante interdum in. Aliquam pellentesque varius nulla, non varius tortor blandit quis. Curabitur faucibus augue ex, volutpat venenatis libero finibus et. Fusce vehicula metus id dolor sodales egestas. Morbi vehicula libero non augue tristique, et tincidunt arcu sodales. Mauris porta turpis eleifend ante malesuada, eu finibus urna elementum. Nulla congue est quis sapien maximus, et placerat nisl lacinia. Maecenas fringilla lectus sed augue aliquam, eget scelerisque ipsum pellentesque.
              </p> */}
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
          <div>
            Copyright &#169; 2020-{new Date().getFullYear()} literaiiy. All rights reserved. Powered by

            <a href='https://nextjs.org' className="semibold"> Next.js</a>.
          </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/kursor@0.1.6/dist/kursor.min.js"></script>
        {/* END */}
      </div>
    )
  }
}
