import Btn from "./btn.js"
function Hero(props) {
  return (
  <header>
  <div className="w-full bg-center bg-cover bg">
    <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
      <div className="text-center">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gray-200 font-semibold uppercase tracking-widest">New Season {props.season} V.{props.ver}</span>
            <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Diamond Squad <br /> Season 2</h2>
            <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
               Join your very own Minecraft server. <br /><br />
               IP: DiamondSquadX.aternos.org <br />
               Port: 19313
            </p>
          <a href="http://aternos.com"><Btn/></a>
            {/*// <a className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
            //   href="http://aternos.com">Join Now</a> */}
            
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Hero;