import { Link } from "react-router-dom"
import ItemsWiki from "./ItemsWiki"
import GameDownload from "./GameDownload"
import HomePage from "./HomePage"
import AboutUs from "./AboutUs"
import Login from "./Login"
import { useContext } from "react"
import SBDContext from "../context/SideByDarknessContext"


const navbar = () => {
  const { profile } = useContext(SBDContext);

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
                src={profile} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to={"profile"} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to={"settings"}>Settings</Link></li>
            <li><Link to={"login"}>Login</Link></li>
            <li><Link to={"register"}>Register</Link></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default navbar