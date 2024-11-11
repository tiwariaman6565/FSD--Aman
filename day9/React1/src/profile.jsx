import React from 'react'
import './Profile.css'

const Profile = ({n1 , n2 , n3}) => {
  return (
    <div id="pr">
        <h1>Name : {n1}</h1>
        <h2>Age: {n2}</h2>
        <h2>Residence: {n3}</h2>
    </div>
  )
}

export default Profile