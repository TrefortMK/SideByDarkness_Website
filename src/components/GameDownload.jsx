import React from 'react'

const GameDownload = () => {
  // Placeholder függvény a játék indításához
  const handlePlay = () => {
    alert("A játék indítási logika itt lesz implementálva")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Lebegő részecske effekt */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-500 rounded-full animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
            }}
          ></div>
        ))}
      </div>

      <div className="hero min-h-screen">
        <div className="hero-content text-center flex-col lg:flex-row-reverse">
          {/* Letöltési szekció */}
          <div className="max-w-md lg:max-w-2xl space-y-8 p-8 bg-black/50 rounded-2xl border border-purple-900/50">
            <h1 className="text-5xl font-bold font-['Bebas_Neue'] text-purple-300">
              Játék :)
            </h1>

            {/* Letöltés gomb */}
            <div className="tooltip" data-tip="Várható méret: 1.2GB">
              <a
                href="/path/to/game.exe"
                download
                className="btn btn-lg btn-primary bg-purple-800 hover:bg-purple-700 border-purple-900 text-white animate-pulse"
              >
                📥 Letöltés (v1.0.3)
              </a>
            </div>

            {/* Játék indítás gomb */}
            <button
              onClick={handlePlay}
              className="btn btn-lg btn-secondary bg-red-700 hover:bg-red-600 border-red-800 text-white gap-2"
            >
              🎮 Játék most!
            </button>

            {/* Rendszerkövetelmények */}
            <div className="stats bg-black/50 border border-purple-900/50">
              <div className="stat">
                <div className="stat-title text-purple-300">Minimális követelmények</div>
                <div className="stat-value text-xl">Windows 10</div>
                <div className="stat-desc text-purple-100">4GB RAM · DX11 · 2GB HDD</div>
              </div>
            </div>

            {/* Játék helye - placeholder */}
            <div className="mockup-window bg-gray-800 border border-purple-900/50 mt-8">
              <div className="flex justify-center px-4 py-16 bg-gray-900">
                <p className="text-purple-400">[Itt lesz elérhető a böngészős verzió]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameDownload