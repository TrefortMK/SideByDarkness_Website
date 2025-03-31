import React, { useState } from 'react'
import { Link } from "react-router-dom"


const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/user/regisztracio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Regisztrációs hiba!'); // Hibát dob, ha a válasz státusza nem OK
      }
  
      // Sikeres válasz kezelése
      alert('Sikeres regisztráció! Most bejelentkezhetsz.');
      setError('');
      
    } catch (err) {
      setError(err.message); // Pontos hibaüzenet megjelenítése
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="card bg-black/50 border border-purple-900/50 w-full max-w-md">
        <div className="card-body space-y-4">
          <h2 className="card-title text-3xl text-purple-300 font-['Bebas_Neue'] mb-6">Új fiók létrehozása</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-purple-100">Email cím</span>
              </label>
              <input
                type="email"
                className="input bg-gray-900 border-purple-900/50 text-purple-100 focus:border-purple-500"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-purple-100">Felhasználónév</span>
              </label>
              <input
                type="text"
                className="input bg-gray-900 border-purple-900/50 text-purple-100 focus:border-purple-500"
                placeholder="Felhasználónév"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-purple-100">Jelszó</span>
              </label>
              <input
                type="password"
                className="input bg-gray-900 border-purple-900/50 text-purple-100 focus:border-purple-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="alert alert-error bg-red-900/50 border-red-900/50 text-red-300">
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary bg-purple-800 hover:bg-purple-700 border-purple-900 w-full text-lg"
            >
              Regisztráció
            </button>
          </form>

         <div className="text-center mt-4">
           <span className="text-purple-300">Már van fiókod? </span>
           <Link to="/login" className="text-purple-400 hover:text-purple-300 transition-colors">
             Jelentkezz be!
           </Link>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Register