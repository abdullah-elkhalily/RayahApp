/* eslint-disable no-unused-vars */
import React from 'react'
import  './Screens.css'
import  img1 from '../../assets/one.png' 
import { useNavigate } from 'react-router-dom';
export const ScreenOne = () => {
    const navigate = useNavigate();

  return (
    <>
    <div className='Screen'>
<div className="REctangel">
  
</div>
<div className="circle">
        <img src={img1}  width={"100%"} height={"100%"} />
    </div>
    <p className="textLogin">Welcome to
 </p>
    <p className="textHoch">Hochschule Koblenz </p>
    <button 
    
    className="rectangelBotton"
    
    onClick={() => { navigate('./login');}} >

    </button>
    </div>
    
    
    
    </>
  )
}
