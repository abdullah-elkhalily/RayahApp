/* eslint-disable no-unused-vars */
import React from 'react'
import  './Measurement.css'
import  img4 from '../../assets/4.jfif' 
import  img5 from '../../assets/3.png' 
import { useNavigate } from 'react-router-dom'

export const Measurement = () => {
  const navigate = useNavigate();

  return (
    <>
       <div className='Screen'> 
    <div className="ScannenHeder">
    <i className="fa-solid fa-angle-left angl"></i>
<p className='scanText'>Measurement</p>
    </div>
 <div className="layoutMeasurement">
    <div className="MeasurementOne">
        
      <div className="imgside">
      <p className='LiveView'>Live View</p>
        <img src={img4} width={300} height={140}/>
      </div>
      

    </div>
    <div className="MeasurementTwo">
    <div className="imgside">
      <p className='LiveView'>DeoxyHb</p>
      <img src={img5} width={715} height={141}/>
      </div>
        <div className='colorsSide'>
            <div className="color1">
            </div>
            <div className="color2">
            </div>
            <div className="color3">
            </div>
            <div className="color4">
            </div>
            <div className="color5">
            </div>
            <div className="color6">
            </div>
            <div className="color7">
            </div>
            <div className="color8">
            </div>
            <div className="color3">
            </div>
            <div className="color4">
            </div>
            <div className="color5">
            </div>
        </div>
        <div className="numbers">
          <p>_7</p>
          <p>_0</p>
          <p>_7</p>
        </div>
    </div>
    <div className="MeasurementTwo">
    <div className="imgside">
      <p className='LiveView'>DeoxyHb</p>
      <img src={img5} width={715} height={141}/>
      </div>
        <div className='colorsSide2'>
            <div className="color1">
            </div>
            <div className="color2">
            </div>
            <div className="color3">
            </div>
            <div className="color4">
            </div>
            <div className="color5">
            </div>
            <div className="color6">
            </div>
            <div className="color7">
            </div>
            <div className="color8">
            </div>
            <div className="color3">
            </div>
            <div className="color4">
            </div>
            <div className="color5">
            </div>
        </div>
        <div className="numbers2">
          <p>_7</p>
          <p>_0</p>
          <p>_7</p>
        </div>
    </div>
 </div>
      <div className="DropButton">

        <p className='TextDrop'>Drop your file here, or <a href="/Upload">  Browse</a></p>
        <p className='MaxSize'>Max size 10MB</p>
      </div>
        </div>
    
    </>
  )
}
