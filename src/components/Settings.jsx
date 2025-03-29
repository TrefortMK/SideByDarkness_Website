import React, { useContext, useState } from 'react';
import SBDContext from '../context/SideByDarknessContext';

const Settings = () => {

  const {setThemeDark} = useContext(SBDContext);

  return (
    <div>
      <button onClick={() => setThemeDark(false)}>Light Theme</button>
      <button onClick={() => setThemeDark(true)}>Dark Theme</button>
      <p>Current theme is something</p>
    </div>
  );

}

export default Settings