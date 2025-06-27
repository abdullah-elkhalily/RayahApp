/* eslint-disable no-unused-vars */
import React from 'react'
import  './welcom.css'
import { useNavigate } from 'react-router-dom';
import HeaderPage from "../../Component/Headerpage/HeaderPage";
export const Welcome = () => {
    const navigate = useNavigate();

  return (
    <>
    <div className='Screen'>
<HeaderPage></HeaderPage>
    <p className="textLogin">Welcome to
 </p>
    <p className="textHoch">Hochschule Koblenz </p>
    <button 
    
    className="rectangelBotton"
    onClick={() => { navigate('./login');}} >
        Get Started

    </button>
    </div>
    
    
    
    </>
  )
}
