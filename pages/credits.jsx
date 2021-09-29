import React from "react";
import { render } from "react-dom";
import Navbar from '../components/nav.jsx'

function Credits() {
  return (
    <div>
      <Navbar />
      <h1>Credits</h1>
      <div className='creditsBox'>
      <img src="https://gist.githubusercontent.com/literaiiy/0f8a22d56b24cb0357e22d15982bd446/raw/761120932e55b1ed957281361a4549f0808c9db2/nodejs-new-black.svg" alt="Node.js" />
      <img src="https://gist.githubusercontent.com/literaiiy/0f8a22d56b24cb0357e22d15982bd446/raw/761120932e55b1ed957281361a4549f0808c9db2/react-js-blog-header.svg" alt="React" />
      <img src="https://gist.githubusercontent.com/literaiiy/0f8a22d56b24cb0357e22d15982bd446/raw/761120932e55b1ed957281361a4549f0808c9db2/Nextjs-logo.svg" alt="Next.js" />
      </div>
    </div>
  )
}

export default Credits