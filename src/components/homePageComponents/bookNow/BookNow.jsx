import React, { useState, useEffect, useRef } from 'react'
import './bookNow.css'
import { checkUpService } from "../../../api/CheckupService";
import { useNavigate } from 'react-router-dom'
import { ReactComponent as BookImg } from '../../../assets/book-img.svg'

const BookNow = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.data.role;

  const [doctors, setDoctors] = useState([])

  const [priorities, setPriorities] = useState ([
    {
      value: "Doctor" 
    },
    {
      value: "CheckUpTime"
    }
  ])

  const doctorIdRef = useRef();
  const startIntervalTimeRef = useRef();
  const endIntervalTimeRef = useRef();
  const priorityRef = useRef();

  const onSubmit = () => {

    navigate('/check-ups'
    ,{
      state: {
        doctorId: doctorIdRef.current.value,
        startIntervalTime: startIntervalTimeRef.current.value,
        endIntervalTime: endIntervalTimeRef.current.value,
        priority: priorityRef.current.value,
      }
    })
  }

  useEffect(() => {
    (async () => {
      var expertise = null;
      if(role === 'Doctor')
      {
        expertise =  "Specialist"
        setPriorities([{value: "Doctor"} ])
      }
      else if(role === 'Patient')
      {
        expertise =  "Generalist"
        setPriorities([{value: "Doctor"}, {value:"CheckUpTime"}])
      }

      const doctors = await checkUpService.getDoctorsByExpertise(expertise);
      setDoctors([...doctors]);
      console.log('doctors', doctors);
    })();
  }, [setDoctors]);

  return (
    <div>
      <section className="book" id="book">
        <h1 className="heading">
          <span>book</span> now
        </h1>
        <div className="row">
          <div className="image">
            <BookImg />
          </div>
          <form onSubmit={onSubmit}>
            <h3>See Available Check Ups</h3>
            <label>Doctor</label>
            <select ref={doctorIdRef} name="doctorId" id="doctorId" className='box'>
            {doctors.map((doctor) => (
              <option key={doctor.userId} value={doctor.userId}>{doctor.firstName} {doctor.lastName}</option>
            ))}
            </select>
            <label>Priority</label>
            <select ref={priorityRef} name="priority" className='box'>
            {priorities.map((priority) => (
              <option key={priority.value} value={priority.value}>{priority.value}</option>
            ))}
            </select>
            <label>Date From</label>
            <input ref={startIntervalTimeRef} placeholder="Start Interval Time" type="datetime-local" className="box" required />
            <label>Date To</label>
            <input ref={endIntervalTimeRef} placeholder="End Interval Time" type="datetime-local" className="box" required />
            <input
              type="submit"
              value="Book Now"
              className="btn"
              //onClick={onSubmit}
            />
          </form>
        </div>
      </section>
    </div>
  )
}

export default BookNow
