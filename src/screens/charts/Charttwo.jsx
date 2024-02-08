/* eslint-disable no-unused-vars */
import React from 'react';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';
import  './Charts.css'
import  img4 from '../../assets/4.jfif' 
import  img2 from '../../assets/2.png' 

const ChartsTwo = () => {
  // Sample data for the chart
  const data = {
    labels: ['', '', '','', '', '','', '', '','', '', '','', '', '','', '', ''],
    datasets: [
      {
        label: 'Roi 1',
        data: [ 26,  28, 27, 26,25, 28, 26,25,27, 26,25, 28, 27, 28, 26, 29, 29,25, 29, ],
        borderColor: '#e21010 ',
        backgroundColor: '#e21010',
      },
      {
        label: 'Roi 2',
        data: [25, 26, 29, 28,25, 25, 27, 28, 26, 29, 29,25, 26, 25, 28, 28, ],
        borderColor: '#288ae6',
        backgroundColor: '#288ae6',
      },
    ],
  };



  return (
    <>  

    <div className='ChartScreen'> 
        <div className="ChartHeder">
        <i className="fa-solid fa-angle-left angl"></i>
    <p className='scanText'>Time series</p>
    <p  className='ExportText'> <i className="fa-solid fa-arrow-up-from-bracket"></i> Export</p>
        </div>
      

        <div className='DeoxyHp'>
          
          <div className='dx'>
          <h2>DeoxyHb</h2>
            <Line data={data} />
          </div>
          
        </div>
        <button className="SaveButton"> Save</button>
        <div className="TabButton">
      <div className='centerButon'>
      <img src={img2} width={40} height={40}/>

      </div>
      <div className='Charttapicons'>
    
      <i className="fa-brands fa-microsoft icon1"></i>
      <i className="fa-brands fa-facebook-messenger icon2"></i>
      <i className="fa-regular fa-user icon3"></i>
      </div>
    </div>
        </div>
           
      
        </>
  );
};

export default ChartsTwo;
