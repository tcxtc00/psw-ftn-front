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
    <label>Doctor</label>
    <input disabled={true} className='box' value={`${doctor.firstName} ${doctor.lastName}`}/>
    {role === 'Doctor' ?
    <div>
    <label>Patient</label>  
    <select ref={patientIdRef} onChange={getPatientIdFromSelect} name="patientId" id="patientId" className='box'>
    {patients.map((patient) => (
      <option key={patient.userId} value={patient.userId}>{patient.firstName} {patient.lastName}</option>
    ))}
    </select> 
    </div> : null}
    <label>Start Time</label>
    <input disabled={true} className='box' value={startTime}/>
    <label>End Time</label>
    <input disabled={true} className='box' value={endTime}/>
    <label>Cancellation Time</label>
    <input disabled={true} className='box' value={cancellationTime}/>
    {cancelCheckUp ? <input type="submit" value="Cancel" className="btn" onClick={cancelCheckUp(checkUpId)}/> 
    : <input type="submit" value="Book" className="btn" onClick= {bookCheckUp(checkUpId, patientId)}/>
    }
  </form>
  )
  }
export default CheckUp;