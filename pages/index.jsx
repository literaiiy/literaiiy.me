import Head from 'next/head'
import Navbar from '../components/nav.jsx'
import Card from '../components/card.jsx'

export default function Home() {
  return (
    <div> 
      {/* START */}
      <Navbar/>
      <main>
        <h1 class='fpLogo'>
          literaiiy.me
        </h1>
        <p>
          literaiiy.me is currently being rewritten in JavaScript,
          with the help of libraries React.js and Next.js. Stay tuned for more.
        </p>
        <Card/>
      </main>
      <footer>
        <div>
          Copyright &#169; 2020-{new Date().getFullYear()} literaiiy. All rights reserved. Powered by
          <a href='https://reactjs.org' className="semisemibold"> React</a> and
          <a href='https://nextjs.org' className="semisemibold"> Next.js</a>.
        </div>
      </footer>
      {/* END */}
    </div>
  )
}
