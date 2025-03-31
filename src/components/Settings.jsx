import React, { useContext } from 'react';
import SBDContext from '../context/SideByDarknessContext';

const Settings = () => {
  const { theme, setThemeDark } = useContext(SBDContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="card bg-black/50 border border-purple-900/50 max-w-2xl mx-auto">
        <div className="card-body">
          <h2 className="card-title text-3xl text-purple-300 font-['Bebas_Neue'] mb-8">Beállítások</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-900/30 p-6 rounded-xl border border-purple-900/50">
              <h3 className="text-xl font-semibold text-purple-200 mb-4">Téma választása</h3>
              
              <div className="flex gap-4 flex-wrap justify-center">
                <button 
                  onClick={() => setThemeDark(false)}
                  className={`btn btn-lg ${theme === 'light' ? 'btn-primary' : 'btn-ghost'} gap-2 flex-1`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                  Világos téma
                </button>
                
                <button 
                  onClick={() => setThemeDark(true)}
                  className={`btn btn-lg ${theme === 'dark' ? 'btn-primary' : 'btn-ghost'} gap-2 flex-1`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Sötét téma
                </button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-lg font-medium text-purple-300">
                  Aktív téma: <span className="text-purple-400">{theme === 'dark' ? 'Sötét' : 'Világos'}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;