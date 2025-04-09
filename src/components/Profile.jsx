import React, { useContext, useState, useEffect } from 'react';
import SBDContext from '../context/SideByDarknessContext';

const Profile = () => {
    const { profile, setProfile, logedin, user } = useContext(SBDContext);
    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: ''
    });
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const fetchProfileImage = async () => {
            try {
                const response = await fetch('http://localhost:8000/user/getimg', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                });
                
                if (!response.ok) throw new Error(`HTTP hiba ${response.status}`);
                
                const data = await response.json();
                if (data.image) {
                    setProfile(`data:image/jpeg;base64,${data.image}`);
                }
            } catch (error) {
                console.error('Profilkép betöltési hiba:', error);
                setMessage({ 
                    type: 'error', 
                    content: 'Nem sikerült betölteni a profilképét. Próbálja újra később!' 
                });
            }
        };

        if (logedin) fetchProfileImage();
    }, [logedin, setProfile]);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file || !file.type.startsWith('image/')) {
            setMessage({ type: 'error', content: 'Csak JPG/PNG formátumú képek tölthetők fel!' });
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setMessage({ type: 'error', content: 'A kép mérete nem haladhatja meg a 2MB-ot!' });
            return;
        }

        const reader = new FileReader();
        reader.onloadend = async () => {
            try {
                const base64Data = reader.result.split(',')[1];
                
                const response = await fetch('http://localhost:8000/user/imgupload', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    },
                    body: JSON.stringify({ image: base64Data })
                });

                const result = await response.json();
                if (!response.ok) throw new Error(result.message || 'Ismeretlen szerverhiba');

                setProfile(reader.result);
                setMessage({ type: 'success', content: 'Profilkép sikeresen frissítve!' });
            } catch (error) {
                console.error('Képfeltöltési hiba:', error);
                setMessage({ 
                    type: 'error', 
                    content: error.message || 'Hiba a kép feltöltése közben' 
                });
            }
        };
        reader.readAsDataURL(file);
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        
        if (passwords.new !== passwords.confirm) {
            setMessage({ type: 'error', content: 'A jelszavak nem egyeznek!' });
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/user/forgotpass', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    email: user.email,
                    password: passwords.current,
                    newPassword: passwords.new
                })
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message);

            setMessage({ type: 'success', content: 'Jelszó sikeresen módosítva!' });
            setPasswords({ current: '', new: '', confirm: '' });
        } catch (error) {
            setMessage({ 
                type: 'error', 
                content: error.message || 'Hiba történt a jelszó módosítása közben' 
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
            <div className="max-w-2xl mx-auto space-y-8">
                {/* Profilkép rész */}
                <div className="card bg-black/50 border border-purple-900/50">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl text-purple-300 mb-6">Profil Beállítások</h2>
                        
                        <div className="avatar">
                            <div className="w-32 rounded-full border-4 border-purple-900/50">
                                <img 
                                    src={profile} 
                                    alt="Profilkép" 
                                    className="object-cover h-32 w-32"
                                    onError={(e) => {
                                        e.target.src = "https://static.vecteezy.com/system/resources/thumbnails/030/504/836/small_2x/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg";
                                    }}
                                />
                            </div>
                        </div>
                        
                        <label className="btn btn-primary bg-purple-800 hover:bg-purple-700 border-purple-900 mt-4">
                            📸 Kép módosítása
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                className="hidden"
                                accept="image/jpeg, image/png"
                            />
                        </label>

                        {message && (
                            <div className={`mt-4 alert ${message.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                                {message.content}
                            </div>
                        )}
                    </div>
                </div>

                {/* Jelszóváltoztatás rész */}
                <div className="card bg-black/50 border border-purple-900/50">
                    <div className="card-body">
                        <h2 className="card-title text-2xl text-purple-300 mb-4">Jelszó módosítás</h2>
                        
                        <form onSubmit={handlePasswordChange} className="space-y-4">
                            <input
                                type="password"
                                placeholder="Jelenlegi jelszó"
                                className="input bg-gray-900 border-purple-900/50 text-purple-100 w-full"
                                value={passwords.current}
                                onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                                required
                            />
                            
                            <input
                                type="password"
                                placeholder="Új jelszó"
                                className="input bg-gray-900 border-purple-900/50 text-purple-100 w-full"
                                value={passwords.new}
                                onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                                required
                            />
                            
                            <input
                                type="password"
                                placeholder="Jelszó megerősítése"
                                className="input bg-gray-900 border-purple-900/50 text-purple-100 w-full"
                                value={passwords.confirm}
                                onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                                required
                            />

                            <button 
                                type="submit" 
                                className="btn btn-primary bg-purple-800 hover:bg-purple-700 border-purple-900 w-full"
                            >
                                Jelszó mentése
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;