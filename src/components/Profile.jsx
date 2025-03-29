import React, { useContext, useState } from 'react'
import SBDContext from '../context/SideByDarknessContext';

const Profile = () => {
  const { profile, setProfile } = useContext(SBDContext);

  const changed = (event) => {
    setProfile(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={profile} />
        </div>
      </div>
      <input type="file" onChange={changed} accept="image/png, image/gif, image/jpeg" id='kepek' className="file-input file-input-bordered w-full max-w-xs" />
    </div>
  )
}

export default Profile