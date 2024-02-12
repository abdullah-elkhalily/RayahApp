/* eslint-disable no-unused-vars */
import React from 'react'
import  './Upload.css'
import  img1 from '../../assets/one.png' 
import  img2 from '../../assets/10.png' 

import ProgressBar from 'react-bootstrap/ProgressBar';




export const Upload = () => {

function BasicExample() {
  return <ProgressBar now={70} style={{height:'5px',color:'#4CB6C4'}} />;
}


  return (
    <>
        <div className='UploadScreen'>

<div className="UploadFream">
<img src={img2} width={80} height={80} className='uploadImg'/>


<p className='BrowseUpload'> 

Browse to upload
</p>
</div>
<div className="RecatanglUpload">
<div className="imgUpload">
<img src={img1} width={30} height={29}/>
</div>
<div className="prograsUpload">
<div className="textProgras">
    <p className='profile'>profile.jpg</p>
    <p className='Edit'>Edit</p>
</div>
<div className="progras">
<BasicExample></BasicExample>
</div>

</div>

</div>
<div className="RecatanglUpload2">
<div className="imgUpload">
<img src={img1} width={30} height={29}/>
</div>
<div className="prograsUpload">
<div className="textProgras">
    <p className='profile'>profile.jpg</p>
    <p className='Edit'>Edit</p>
</div>
<div className="progras">
<BasicExample></BasicExample>
</div>

</div>

</div>
<button className="SaveUploadButton"> Save</button>

        </div>
    
    
    
    </>
  )
}
