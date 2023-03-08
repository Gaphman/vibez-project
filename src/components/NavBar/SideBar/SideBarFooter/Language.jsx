import React from 'react'
import * as GrIcons from "react-icons/gr";


const Language = () => {
  return (
    <div className='language'>
        <button className='langauge-btn'>
            <div><GrIcons.GrLanguage /></div>
            <div>English</div>

        </button>
    </div>
  )
}

export default Language