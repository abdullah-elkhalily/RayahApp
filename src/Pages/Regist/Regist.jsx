/* eslint-disable no-unused-vars */
import React from 'react'
import  './Regist.css'
import  img1 from '../../assets/one.png' 
import HeaderPage from '../../Component/Headerpage/HeaderPage'
import { useNavigate } from 'react-router-dom'


export const Regist = () => {
      const navigate = useNavigate();
  
  return (
    <>
    <div className='Screen'>
<HeaderPage></HeaderPage>

    <p className="textLogin">Welcome to
 </p>
    <p className="textHoch">Hochschule Koblenz </p>
    <form action="">
        <input className='Email' type="email"  placeholder='Email Address'/>
        <input className='password' type="password"  placeholder='password'/>
        <input className='ConfirmPassword' type="password"  placeholder=' Confirm Password'/>

        <button 
            onClick={() => { navigate('/Profile');}} 

        className="RegistBotton">
Sin Up
    </button>
    <p className='login'> if you have an account?<a className='link' href="./Login"> Sin in </a> </p> 

    </form>

    </div>
    
    
    
    </>
  )
}
