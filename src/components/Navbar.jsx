import { Link } from "react-router-dom"
import { useContext } from "react"
import SBDContext from "../context/SideByDarknessContext"

const Navbar = () => {
  const { profile, isLoggedIn, handleLogout } = useContext(SBDContext);

  return (
    <div className="navbar bg-gradient-to-r from-gray-900 to-black border-b border-purple-900/50 px-8">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl font-['Bebas_Neue'] text-purple-300 hover:text-purple-200">
          SIDE BY DARKNESS
        </Link>
      </div>
      
      <div className="flex-none gap-8">
        <Link to="download" className="text-purple-200 hover:text-purple-300 text-lg font-medium transition-colors">
          Letöltés
        </Link>
        <Link to="itemswiki" className="text-purple-200 hover:text-purple-300 text-lg font-medium transition-colors">
          Tárgyak
        </Link>
        <Link to="aboutus" className="text-purple-200 hover:text-purple-300 text-lg font-medium transition-colors">
              Rólunk
            </Link>
      </div>

      <div className="flex-none gap-4 ml-8">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border-2 border-purple-900/50">
              <img alt="Profilkép" src={profile || '/default-avatar.png'} />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52 border border-purple-900/50">
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/profile" className="text-purple-200 hover:bg-purple-900/20">
                    Profil
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="text-purple-200 hover:bg-purple-900/20">
                    Beállítások
                  </Link>
                </li>
                <li><a onClick={handleLogout} className="text-red-400 hover:bg-red-900/20">Kijelentkezés</a></li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="text-purple-200 hover:bg-purple-900/20">
                    Bejelentkezés
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="text-purple-200 hover:bg-purple-900/20">
                    Regisztráció
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="text-purple-200 hover:bg-purple-900/20">
                    Beállítások
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar