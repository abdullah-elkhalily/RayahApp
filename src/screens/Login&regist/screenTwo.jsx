/* eslint-disable no-unused-vars */
import React from 'react'
import  './Screens.css'
import  img1 from '../../assets/one.png' 
import { useNavigate } from 'react-router-dom';
export const ScreenTwo = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className='Screen'>
<div className="REctangel">
  <div className='cc'>
    <div className="halfcircle">
        <img src={img1}  width={"100%"} height={"100%"} />
    </div></div>

</div>

    <p className="textLogin">Welcome to
 </p>
    <p className="textHoch">Hochschule Koblenz </p>
    <form action="">
        <input className='Email' type="email"  placeholder='Email Address'/>
        <input className='password' type="password"  placeholder='password'/>
        <button className="loginBotton "  onClick={() => { navigate('/profile')}}>
Log in
    </button>
   <p className='Creat'> Don’t have an account?<a className='link' href="./Regist"> Creat acount</a> </p> 
    </form>

    </div>
    
    
    
    </>
  )
}
