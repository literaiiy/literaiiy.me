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
        {/* <p>
          literaiiy.me is currently being rewritten in JavaScript,
          with the help of libraries React.js and Next.js. Stay tuned for more.
        </p> */}
        <div className="cardList">
          <Card i='tbx'n='literaiiy Toolbox' yAdj='2' href='https://toolbox.literaiiy.me'/>
          <Card i='dah' n='dah.li/a' yAdj='0' href="https://dah.li/a"/>
          <Card i='tir' n='tiramisu' yAdj='1' href="https://tiramisu.vip"/>
          <Card n='' yAdj='2'/>
          <Card n='' yAdj='3'/>
          <Card n='' yAdj='2'/>
          <Card n='' yAdj='3'/>
        </div>
        <div className="empty"></div>
        <div>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel est eu justo porttitor
            faucibus. Cras tortor ipsum, aliquet id elit ac, pulvinar elementum eros. Nunc at posuere dui,
            ut tincidunt nisl. Nullam ut ullamcorper justo. Nunc sollicitudin finibus massa ac blandit.
            Proin tincidunt ipsum luctus elementum maximus. Sed convallis, dolor et malesuada cursus,
            mauris nisl ultrices nibh, vel placerat est tellus et lorem. Sed laoreet et dui id interdum.
            Pellentesque commodo nulla non mi hendrerit luctus. Nulla neque eros, commodo non ex quis,
            lacinia fermentum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p>
            Suspendisse potenti. Aliquam dui nibh, pharetra nec aliquam in, vestibulum quis libero.
            Nullam nec pharetra purus. Nulla euismod mauris nec rhoncus elementum. Nulla in sodales
            velit, vitae malesuada leo. Pellentesque volutpat arcu sed erat auctor, sit amet vehicula
            dolor auctor. Proin tempus nunc imperdiet, viverra ipsum eu, sollicitudin odio. Phasellus
            et pulvinar lectus. Phasellus elit sem, pharetra et venenatis a, vulputate ut nisl. Nunc
            vitae leo et nulla convallis bibendum. Quisque auctor luctus urna, posuere fringilla mauris
            pellentesque vitae. Suspendisse non risus arcu. Donec ut sagittis tortor, vitae mollis eros.
            Curabitur volutpat lectus rhoncus, euismod mi non, ultricies erat.
          </p>
          <p>
            Nulla ac blandit ligula. Nullam est felis, tincidunt bibendum laoreet eget,
            iaculis ut arcu. Praesent iaculis imperdiet augue ac aliquet. Sed tincidunt ut eros eget
            pretium. Aliquam lectus lacus, porta sit amet venenatis quis, hendrerit sit amet arcu.
            Nam rutrum felis et turpis facilisis, sed lacinia lorem scelerisque. Cras nec semper
             lectus, quis maximus lectus.
          </p>
        </div>
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
