import React, {useEffect, useState, useRef} from 'react';

import '../pages/checkUps/checkups.css'

import { checkUpService } from '../api/CheckupService';

const CheckUp = ({ item: {doctor, startTime, endTime, cancellationTime, checkUpId}, index, cancelCheckUp, bookCheckUp}) => {

  const user = JSON.parse(localStorage.getItem("user"));
  var [patientId, setPatientId] = useState(null);
  const role = user.data.role;
  const patientIdRef = useRef();

  const getPatientIdFromSelect = () => {
    setPatientId(patientIdRef.current.value);
}

  const [patients, setPatients] = useState([])

  useEffect(() => {
    (async () => {
     
      if(role === 'Doctor')
      {
        const patients = await checkUpService.getAllPatients();
        setPatients([...patients]);
        setPatientId(patients[0].userId);
        console.log("patientId",patientId);

      }else if( role === 'Patient')
      {
        setPatientId(user.data.userId);
      }
    })();
  }, [setPatients]);

  return (
    <form action="" key={checkUpId}>
    <h3>Check up {index}</h3>
    <p className='box'>{doctor.firstName} {doctor.lastName}</p>
    {role === 'Doctor' ?  
    <select ref={patientIdRef} onChange={getPatientIdFromSelect} name="patientId" id="patientId" className='box'>
    {patients.map((patient) => (
      <option key={patient.userId} value={patient.userId}>{patient.firstName} {patient.lastName}</option>
    ))}
    </select> : null}
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