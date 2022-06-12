import React from 'react';

import '../pages/checkUps/checkups.css'

const CheckUp = ({ item: {doctor, startTime, endTime, cancellationTime, checkUpId}, index, cancelCheckUp, bookCheckUp}) => {
  console.log(checkUpId);

  const user = JSON.parse(localStorage.getItem("user"));
  const patientId = user.data.userId;

  return (
    <form action="" key={checkUpId}>
    <h3>Check up {index}</h3>
    <p className='box'>{doctor.firstName} {doctor.lastName}</p>
    <p className='box'>{startTime}</p>
    <p className='box'>{endTime}</p>
    <p className='box'>{cancellationTime}</p>
    {cancelCheckUp ? <input type="submit" value="Cancel" className="btn" onClick={cancelCheckUp(checkUpId)}/> 
    : <input type="submit" value="Book" className="btn" onClick= {bookCheckUp(checkUpId, patientId)}/>
    }
  </form>
  )
  }
export default CheckUp;