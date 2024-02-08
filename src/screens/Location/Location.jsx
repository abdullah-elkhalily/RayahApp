/* eslint-disable no-unused-vars */
import React from 'react'
import  '../Login&regist/Screens.css'
import  './Location.css'
import Map from './Map-Location'
export const Location = () => {
  return (
    <>
       <div className='LocationScreen'> 
    <div className="ScannenHeder">
    <i className="fa-solid fa-angle-left angl"></i>
<p className='scanText'>Rac</p>
    </div>
 <div className="contactLocation">
    <p className='TextLocaton'>
    Contact Information
    </p>
 </div>
 <div className="map">

    <Map></Map>
 </div>
 <div className="informationLocaton">

   <div className="slectededLocation">
   <i className="fa-solid fa-location-dot loc"></i>
<p className='jose'>Joseph-Rovan-Allee 2
53424 Remagen</p>
   </div>


<div className="LinkWeb">
<i className="fa-solid fa-globe loc"></i>
<p className='word'>https://www.hs-koblenz.de/rac/index</p>

</div>
 </div>


 <div className="linkesSocial">

<i className="fa-brands fa-twitter tw" ></i>
<i className="fa-brands fa-instagram in" ></i>
<i className="fa-brands fa-facebook fa"></i>

</div>
        </div>
    
    </>
  )
}
