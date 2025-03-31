import React, { useContext, useState } from 'react'
import SBDContext from '../context/SideByDarknessContext';

const Profile = () => {
  const { profile, setProfile } = useContext(SBDContext);
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [message, setMessage] = useState(null);

  const handleImageChange = (event) => {
    if(event.target.files[0]) {
      setProfile(URL.createObjectURL(event.target.files[0]));
      setMessage({ type: 'success', content: 'Profilkép sikeresen frissítve!' });
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    
    if(passwords.new !== passwords.confirm) {
      setMessage({ type: 'error', content: 'Az új jelszavak nem egyeznek!' });
      return;
    }

    try {
      const response = await fetch('/api/forgotpass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail'),
          password: passwords.current,
          newPassword: passwords.new
        })
      });

      const data = await response.json();
      
      if(response.ok) {
        setMessage({ type: 'success', content: 'Jelszó sikeresen megváltoztatva!' });
        setPasswords({ current: '', new: '', confirm: '' });
      } else {
        setMessage({ type: 'error', content: data.message || 'Hiba történt!' });
      }
    } catch (error) {
      setMessage({ type: 'error', content: 'Szerverhiba történt!' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Profile Section */}
        <div className="card bg-black/50 border border-purple-900/50">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl text-purple-300 mb-6">Profil Beállítások</h2>
            
            {/* Profile Picture Upload */}
            <div className="space-y-4 w-full">
              <div className="avatar flex justify-center">
                <div className="w-32 rounded-full border-4 border-purple-900/50">
                  <img src={profile} alt="Profilkép" />
                </div>
              </div>
              
              <label className="btn btn-primary bg-purple-800 hover:bg-purple-700 border-purple-900">
                📸 Kép módosítása
                <input 
                  type="file" 
                  onChange={handleImageChange} 
                  accept="image/png, image/gif, image/jpeg" 
                  className="hidden" 
                />
              </label>
            </div>
          </div>
        </div>

        {/* Password Change Section */}
        <div className="card bg-black/50 border border-purple-900/50">
          <div className="card-body">
            <h2 className="card-title text-2xl text-purple-300 mb-4">Jelszó módosítás</h2>
            
            <form onSubmit={handlePasswordChange} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-100">Jelenlegi jelszó</span>
                </label>
                <input 
                  type="password" 
                  className="input bg-gray-900 border-purple-900/50 text-purple-100"
                  value={passwords.current}
                  onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-100">Új jelszó</span>
                </label>
                <input 
                  type="password" 
                  className="input bg-gray-900 border-purple-900/50 text-purple-100"
                  value={passwords.new}
                  onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-100">Jelszó megerősítése</span>
                </label>
                <input 
                  type="password" 
                  className="input bg-gray-900 border-purple-900/50 text-purple-100"
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                  required
                />
              </div>

              {message && (
                <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                  <span>{message.content}</span>
                </div>
              )}

              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="btn btn-primary bg-purple-800 hover:bg-purple-700 border-purple-900"
                >
                  Jelszó mentése
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile