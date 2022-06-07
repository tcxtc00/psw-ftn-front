import React from 'react';

import api from '../api/ApiService'

import '../pages/checkUps/checkups.css'

const CheckUp = ({ item: {doctor, startTime, endTime, cancellationTime, checkUpId}, index}) => {
  console.log(checkUpId);
  
  const cancelCheckUp = async(checkUpId) => {
    api.put(`/CheckUp/Cancel?checkUpId${checkUpId}`, {
    //checkUpId,
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
      }
    })
    .then(res => console.log(res))
    .catch(err =>console.log(err));
  }

  return (
    <form action="" key={doctor.userId}>
    <h3>Check up {index}</h3>
    <p className='box'>{doctor.firstName} {doctor.lastName}</p>
    <p className='box'>{startTime}</p>
    <p className='box'>{endTime}</p>
    <p className='box'>{cancellationTime}</p>
    <input type="submit" value="Cancel" className="btn" onSubmit={cancelCheckUp}/>
  </form>
  )
  }
export default CheckUp;