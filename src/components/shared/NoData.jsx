import React from 'react'
import './NoData.css'

const NoData = (text) => {
  return (
    <div>
        <img alt={"empty"} className="center" height={100} width={100}/> 
        <p>{text}</p>
    </div>
  )
}

export default NoData