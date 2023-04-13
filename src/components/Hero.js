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
               IP: DIAMONDsquadX.aternos.me  <br />
               Port: 64059
            </p>
          <a href="https://add.aternos.org/DIAMONDsquadX"><Btn/></a>
       
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Hero;