import { Link } from "react-router-dom"
import ItemsWiki from "./ItemsWiki"
import GameDownload from "./GameDownload"
import HomePage from "./HomePage"
import AboutUs from "./AboutUs"


const navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to={"/"} className="btn btn-ghost text-xl font-weight: bold">Side By Darkness</Link>
  </div>
  <div className="flex-1 font-weight: bold">
    <Link to={"download"} className="btn btn-ghost text-xl">Download</Link>
  </div>
  <div className="flex-1">
    <Link to={"itemswiki"} className="btn btn-ghost text-xl font-weight: bold">Items Wiki</Link>
  </div>
  
  
  <div className="flex-1">
    <Link to={"aboutus"} className="btn btn-ghost text-xl font-weight: bold">About Us</Link>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default navbar