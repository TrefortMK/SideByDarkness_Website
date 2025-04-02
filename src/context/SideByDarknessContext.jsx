import { createContext, useEffect, useState } from "react";

const SBDContext = createContext();

export const SBDContextProvider = ({ children }) => {
    const [profile, setProfile] = useState("https://static.vecteezy.com/system/resources/thumbnails/030/504/836/small_2x/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg");
    const [theme, setTheme] = useState("light");
    const [user,setUser] = useState(null)
    const [logedin,setLogeding] = useState(false)

    const setThemeDark = (isDark) => {
        setTheme(isDark ? "dark" : "light");
        localStorage.setItem("theme", isDark ? "t" : "f");
    }
    const handleLogout =  () => {
        
            setLogeding(false); // Pontos hibaüzenet megjelenítése
            localStorage.removeItem("token")
            const navigate = useNavigate();
            navigate("/")
          
    }
    const getuser = async () => {
        if (localStorage.getItem("token") == null) {
           return;
         }
        try {
          const response = await fetch('http://localhost:8000/user/getuserbytoken', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${localStorage.getItem("token")}` }
          });
      
          const data = await response.json();
          
          if (!response.ok) {
            throw new Error(data.message || 'Hibás adatok!'); // Hibát dob, ha a válasz státusza nem OK
          }
      
          // Sikeres válasz kezelése
          setUser(data.user)
          console.log(data.user)
          setLogeding(true)
          
        } catch (err) {
          setLogeding(false); // Pontos hibaüzenet megjelenítése
          localStorage.removeItem("token")
        }
      };

    useEffect(() => {
        if (localStorage.getItem("theme") != null) {
            if (localStorage.getItem("theme") === "t")
                setThemeDark(true);
            else if (localStorage.getItem("theme") === "f")
                setThemeDark(false);
        }
        getuser()
    }, []);

    return <SBDContext.Provider value={{
        profile, setProfile, setThemeDark, theme,user,logedin,handleLogout,getuser
    }}>{children}</SBDContext.Provider>
}

export default SBDContext;