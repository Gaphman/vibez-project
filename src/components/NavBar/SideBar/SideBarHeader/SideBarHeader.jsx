import React from 'react'
import VibezLogo from "../Images/VibezLogo.png"

const SideBarHeader = () => {
  return (
    <div className='SideBarHeaderContainer'>
    <a className="Logo-Name" aria-current="page" href="/home">
        <div className='Logo'>
        <img src={VibezLogo} className="VibezImg" alt ="" />
        </div>
        <div className='Name'>
            <h2>Vibez Music</h2>
        </div>
        </a>
        

    </div>
  )
}

export default SideBarHeader