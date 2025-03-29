import { createContext, useEffect, useState } from "react";

const SBDContext = createContext();

export const SBDContextProvider = ({ children }) => {
    const [profile, setProfile] = useState("https://static.vecteezy.com/system/resources/thumbnails/030/504/836/small_2x/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg");
    const [theme, setTheme] = useState("light");

    const setThemeDark = (isDark) => {
        setTheme(isDark ? "dark" : "light");
        localStorage.setItem("theme", isDark ? "t" : "f");
    }

    useEffect(() => {
        if (localStorage.getItem("theme") != null) {
            if (localStorage.getItem("theme") === "t")
                setThemeDark(true);
            else if (localStorage.getItem("theme") === "f")
                setThemeDark(false);
        }
    }, []);

    return <SBDContext.Provider value={{
        profile, setProfile, setThemeDark, theme
    }}>{children}</SBDContext.Provider>
}

export default SBDContext;