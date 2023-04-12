import '../index.css'
function Comp() {
  return (
  <nav>
    <ul className="flex space-x-4 bg-violet-600 text-white">
   <li className="p-3 hover:text-violet-400" ><a className="p-2 hover:text-violet-400" href="/">Home</a></li>
   <li className="p-3 hover:text-violet-400"><a className="p-[2.5px] hover:text-violet-400"href="/">About</a></li>
   <li className="p-3 hover:text-violet-400"><a href="/" className="p-2 hover:text-violet-400">Contact</a></li>
    <li className="p-3"><svg viewBox="0 0 100 80" width="40" height="40" className="fill-white h-6 w-8 m-0 ">
  <rect width="100" height="15"></rect>
  <rect y="30" width="100" height="15"></rect>
  <rect y="60" width="100" height="15"></rect>
</svg></li>
      
    </ul>
  </nav>  
  )
}

export default Comp;