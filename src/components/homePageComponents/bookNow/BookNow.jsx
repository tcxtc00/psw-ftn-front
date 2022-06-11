import React, { useState, useEffect, useRef } from 'react'
import './bookNow.css'
import { checkUpService } from "../../../api/CheckupService";
import { useNavigate } from 'react-router-dom'
import { ReactComponent as BookImg } from '../../../assets/book-img.svg'

const BookNow = () => {
  const navigate = useNavigate();

  const [generalists, setGeneralists] = useState([])

  const priorities = [
    {
      value: "Doctor" 
    },
    {
      value: "CheckUpTime"
    }
  ]

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
      const expertise = {
        expertise: "Generalist"
      }
      const generalists = await checkUpService.getDoctorsByExpertise(expertise);
      setGeneralists([...generalists]);
      console.log('generalists', generalists);
    })();
  }, [setGeneralists]);

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
          <form>
            <h3>See Available Check Ups</h3>
            <select ref={doctorIdRef} name="doctorId" id="doctorId" className='box'>
            {generalists.map((doctor) => (
              <option key={doctor.userId} value={doctor.userId}>{doctor.firstName} {doctor.lastName}</option>
            ))}
            </select>
            <select ref={priorityRef} name="priority" className='box'>
            {priorities.map((priority) => (
              <option key={priority.value} value={priority.value}>{priority.value}</option>
            ))}
            </select>
            <input ref={startIntervalTimeRef} placeholder="Start Interval Time" type="datetime-local" className="box" />
            <input ref={endIntervalTimeRef} placeholder="End Interval Time" type="datetime-local" className="box" />
            <input
              type="submit"
              value="Book Now"
              className="btn"
              onClick={onSubmit}
            />
          </form>
        </div>
      </section>
    </div>
  )
}

export default BookNow
