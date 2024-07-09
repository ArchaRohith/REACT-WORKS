import React from 'react'

import profilepicture from '../assets/images/profile.jpg'

function Profile({profileTitle}) {

    
  return (
    <div>
      <div>
        <h1>Profile title:{profileTitle} </h1>
        </div>
      <div>
        <img src={profilepicture} alt="" />
      </div>
    </div>
  )
}

export default Profile
