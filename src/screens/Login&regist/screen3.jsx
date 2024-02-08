/* eslint-disable no-unused-vars */
import React from 'react'
import  './Screens.css'
import  img1 from '../../assets/one.png' 


export const Screen3 = () => {
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
        <input className='ConfirmPassword' type="password"  placeholder=' Confirm Password'/>

        <button className="RegistBotton">
Sin Up
    </button>
    <p className='login'> Don’t have an account?<a className='link' href="./Login"> Sin in </a> </p> 

    </form>

    </div>
    
    
    
    </>
  )
}
