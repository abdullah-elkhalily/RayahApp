/* eslint-disable no-unused-vars */
import React from 'react'
import  './Scannen.css'
import  '../Login&regist/Screens.css'
import  img4 from '../../assets/4.jfif' 


import { useNavigate } from 'react-router-dom'

export const Scannen = () => {
    const navigate = useNavigate();

  return (
    <>
       <div className='Screen'> 
    <div className="ScannenHeder">
    <i className="fa-solid fa-angle-left angl"></i>
<p className='scanText'>Scannen</p>
    </div>
    <div className='imageScannen'>
<img src={img4} alt="" width={976} height={998}  onClick={() => { navigate('/Measurement')}}/>
<div className='Bolticon'> <i className="fa-solid fa-bolt bolIcon"></i></div>
<div className="startStop">
    <button className='ButtonSTartStop' onClick={() => { navigate('/Charts')}} >
        <div className='textButton'>
            <p className='st'>Start </p>
            
        <p className='so'>/Stop</p>
             </div>

    </button>
</div>
</div>
      
        </div>
    
    </>
  )
}
