// eslint-disable-next-line no-unused-vars
import React from 'react'
import  '../Login&regist/Screens.css'
import  './profile.css'

import  img1 from '../../assets/one.png' 
import  img2 from '../../assets/2.png' 
import  img3 from '../../assets/3.jpg' 

export const Profile = () => {
  
  return (
    <>
    <div className='Screen'>
   
    <i className="fa-regular fa-bell icon"></i>
   

    <div className="REctangel">
   
  <div className='cc'>
    <div className="halfcircle">
        <img src={img1}  width={"100%"} height={"100%"} />
    </div></div>

</div>
<div className='profileimg'>
<img src={img3} width={40} height={40} className='Prof-img' />
<div className='textProf'>  
<p className='prof-Text'> 
Guten Morgen
</p>
<p className='profName'> 
 Mohamed
</p>

</div>

</div>
<div className="Result">
  <p className='ResultText'> Results</p>
  <div className='viewAll'>
    <a href="#"> View all</a>
  </div>
</div>
<div className="allUpdates">

  <div className='ShowUpdat'>
    <div className="Oneupdate">
      <div className="texrupdat">
        <div className='imgupdat'>
          <img src={img1} width={16} height={16}/>
        </div>
        <div> 
        <p className='man-hold'>man-holding-mobile-phone-while...</p>
        <p className='updatDate'>7 days ago</p>
        </div>
        <div className='size'>
        
          929kp
        </div>
        <i className="fa-solid fa-ellipsis-vertical dots"></i>
        
      </div>
    </div>
    <div className="secandupdate">


</div>
      <button className='ButtonView'>View all uploads</button>

  </div>
 

    </div>

    <div className="TabButton">
      <div className='centerButon'>
      <img src={img2} width={40} height={40}/>

      </div>
      <div className='tapicons'>
    
      <i className="fa-brands fa-microsoft icon1"></i>
      <i className="fa-brands fa-facebook-messenger icon2"></i>
      <i className="fa-regular fa-user icon3"></i>
      </div>
    </div>
  </div>

 </> )
}
