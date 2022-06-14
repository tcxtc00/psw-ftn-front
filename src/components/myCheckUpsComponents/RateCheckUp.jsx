import React, { useEffect, useState, useRef } from 'react'
import { checkUpService } from '../../api/CheckupService'

import './rateCheckUp.css'

const RateCheckUp = ({ item: {doctor, startTime, endTime, checkUpId, historyCheckUp}, index, rateCheckUp}) => {
  const gradeRef = useRef()
  const commentRef = useRef()

  const [comment, setComment] = useState('')
  const [grade, setGrade] = useState(1);

  const getCommentFromInput = ()=>{
    setComment(commentRef.current.value);
};

  const getGradeFromSelect = () => {
      setGrade(gradeRef.current.value);
  }
  
  const grades = [
   {
    label:"Very Bad",
    value: 1
   },
   {
    label:"Bad",
    value: 2
   },
   {
    label:"Good",
    value: 3
   },
   {
    label:"Very Good",
    value: 4
   },
   {
    label:"Excellent",
    value: 5
   },
]

  return (
    <form>
    {historyCheckUp ? <div className="rate-stars">{[...Array(historyCheckUp.grade)].map((e, i) => <i className="fas fa-star" key={i}></i>)}</div>
    : <h3>Rate Check up</h3>}
      <input value={`${doctor.firstName} ${doctor.lastName}`} disabled="true" className="box" />
      <input value={startTime} disabled="true" className="box" />
      <input value={endTime} disabled="true" className="box" />
      {historyCheckUp ? null
      : <select ref={gradeRef} onChange={getGradeFromSelect} name="Grade" className='box'>
        {grades.map((grade) => (
        <option key={grade.value} value={grade.value}>{grade.label}</option>
      ))}
      </select>
      }
      {historyCheckUp ? <textarea value={historyCheckUp.comment} disabled="true" placeholder="Comment" className="box" /> 
      : <textarea ref={commentRef} placeholder="Comment" type="textarea"  className="box" onChange={getCommentFromInput}/> }
      
      {historyCheckUp ? null : <input
        type="submit"
        value="Rate"
        className="btn"
        onClick={rateCheckUp({checkUpId: checkUpId, grade: grade, comment: comment})}
      />}
    </form>
  )
}

export default RateCheckUp
