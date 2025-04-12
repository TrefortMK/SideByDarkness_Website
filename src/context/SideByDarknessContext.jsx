import { createContext, useEffect, useState } from "react";

const SBDContext = createContext();

export const SBDContextProvider = ({ children }) => {
  const [profile, setProfile] = useState("https://static.vecteezy.com/system/resources/thumbnails/030/504/836/small_2x/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg");
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);
  const [logedin, setLogedin] = useState(false);

  const setThemeDark = (isDark) => {
    const newTheme = isDark ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    setLogedin(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
  };

  const getuser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch('http://192.168.0.27:8000/user/getuserbytoken', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      if (!response.ok) throw new Error("Hibás adatok");

      setUser(data.user);
      setLogedin(true);

      if (data.user?.profile_picture) {
        const uint8Array = new Uint8Array(data.user.profile_picture.data);
        const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
        setProfile(`data:image/jpeg;base64,${base64String}`);
      }
    } catch (err) {
      console.error("Felhasználói adatok betöltése sikertelen:", err);
      handleLogout();
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
    getuser();
  }, []);

  return (
    <SBDContext.Provider value={{
      profile,
      setProfile,
      theme,
      setThemeDark,
      user,
      logedin,
      handleLogout,
      getuser
    }}>
      {children}
    </SBDContext.Provider>
  );
};

export default SBDContext;