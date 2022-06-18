import React from 'react'
import './NoData.css'
import noDataImg from '../../assets/empty.png';

const NoData = ({text}) => {
  return (
    <div className='center-empty'>
        <img alt={"empty"} src={noDataImg} className="empty-img"/> 
        <p className='text-empty'>{text}</p>
    </div>
  )
}

export default NoData