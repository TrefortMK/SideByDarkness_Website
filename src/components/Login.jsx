import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SBDContext from '../context/SideByDarknessContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { getuser } = useContext(SBDContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://192.168.0.27:8000/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error("Hibás :)");
            
            localStorage.setItem('token', data.token);
            await getuser();
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="card bg-black/50 border border-purple-900/50 w-full max-w-md">
        <div className="card-body space-y-4">
          <h2 className="card-title text-3xl text-purple-300 font-['Bebas_Neue'] mb-6">Bejelentkezés</h2>
          
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
              Bejelentkezés
            </button>
          </form>

          <div className="text-center mt-4">
            <span className="text-purple-300">Még nincs fiókod? </span>
            <Link to="/register" className="text-purple-400 hover:text-purple-300 transition-colors">
              Regisztrálj most!
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login