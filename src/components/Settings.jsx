import React, { useContext, useState } from 'react';
import SBDContext from '../context/SideByDarknessContext';

const Settings = () => {
  const { theme, setThemeDark } = useContext(SBDContext);

  const capitalizeFirstLetter =(str)  => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <div className="p-4 min-h-screen bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-4">Theme Settings</h2>
          
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => setThemeDark(false)}
                className="btn btn-primary gap-2 flex-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
                Light Theme
              </button>
              
              <button 
                onClick={() => setThemeDark(true)}
                className="btn btn-secondary gap-2 flex-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                Dark Theme
              </button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">
                Current theme: {" "}
                <span className="text-primary">
                  {capitalizeFirstLetter(theme)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;