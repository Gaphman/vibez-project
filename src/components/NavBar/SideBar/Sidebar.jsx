import React from 'react'
import "./SideBarCss.css"
import SideBarHeader from './SideBarHeader/SideBarHeader'
import {SideBarData} from "./SideBarData"
import {SideFooterDatas} from "./SideBarFooter/SideFooterDatas" 
import Language from "./SideBarFooter/Language" 




function SideBar () {
  return ( 
<div className="SideBarContainer">
    <div className="header">
        <SideBarHeader />
        </div>
    <ul className='SideBarList'>
        {SideBarData.map((val, key) => {
            return (
            <li key={key}
            className="row"
            id={window.location.pathname == val.link ? "active" : ""}
            onClick={()=> {
                window.location.pathname = val.link
                }}
            >
                <div id='icon'>
                    {val.icon}
                    </div>
                <div id='title'>
                {val.title}
                </div>
            </li>
         )
        })} 
    </ul>    


    <ul className='SideFooterList'>
        {SideFooterDatas.map((val, key) => {
            return (
            <li key={key}
            className="coloumn"
            id={window.location.pathname == val.link ? "active" : ""}
            onClick={()=> {
                window.location.pathname = val.link
                }}
            >
                
                <div id='title'>
                {val.title}
                </div>
            </li>
         )
        })} 
    </ul>  
    
    <Language />  
</div>
  )  
}

export default SideBar