import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Settings = () => {
  
    const [theme, setTheme] = useState(Cookies.get('theme') || 'light');

  const toggleTheme = (themeType) => {
    Cookies.set('theme', themeType);
    setTheme(themeType);
  };

  return (
    <div>
      <button onClick={() => toggleTheme('light')}>Light Theme</button>
      <button onClick={() => toggleTheme('dark')}>Dark Theme</button>
      <p>Current theme is {theme}</p>
    </div>
  );

}

export default Settings