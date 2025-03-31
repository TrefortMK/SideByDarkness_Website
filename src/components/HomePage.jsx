import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Hero Section */}
      <div
        className="hero min-h-screen relative overflow-hidden"
        style={{
         // backgroundImage: `url("")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="hero-overlay bg-opacity-80 bg-gradient-to-b from-purple-900/50 to-black/80"></div>
        
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-2xl space-y-8">
            {/* Game Title with Animated Text Shadow */}
            <h1 
              className="text-7xl font-bold mb-8 font-['Bebas_Neue'] animate-pulse"
              style={{ textShadow: '0 0 15px rgba(159, 28, 234, 0.8)' }}
            >
              SIDE BY DARKNESS
            </h1>



 
            {/* Game Description */}
            <div className="space-y-6 text-lg">
              <p className="mb-4 text-purple-100 font-medium leading-relaxed">
              Leszállni az örök éjszaka állandóan változó labirintusaiba, ahol  
                <span className="text-red-400"> veszély </span>és 
                <span className="text-purple-300"> kincs </span> 
                leselkedik minden sarkon...
              </p>
              
              <div className="stats shadow bg-black/50 border border-purple-900/50">
                <div className="stat">
                  <div className="stat-title text-purple-300">Procedural Dungeons</div>
                  <div className="stat-value text-3xl text-red-400">∞ Combinations</div>
                </div>
              </div>
            </div>

            {/* Call to Action Button as Link */}
            <Link 
              to="/download" 
              className="btn btn-lg btn-primary bg-purple-800 hover:bg-purple-700 border-purple-900 hover:border-purple-800 text-white animate-bounce"
            >
              🗡️ Begin Your Descent
            </Link>

            
          
          </div>
        </div>
      </div>

      {/* Floating Particles Effect */}
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
    </div>
  )
}

export default HomePage