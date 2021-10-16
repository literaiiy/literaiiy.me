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
        <Navbar/>
        <main>
          <div>
            <img className="rellax" data-rellax-speed="-3" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Font_Awesome_5_solid_cloud.svg" alt="" />
          </div>
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
          <img className='blackWave _noselect' draggable="false" onScroll={this.handleScroll} src="/images/blackWave.svg"/>
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
