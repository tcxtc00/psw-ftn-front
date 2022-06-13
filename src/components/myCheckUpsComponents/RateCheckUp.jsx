import React, { useEffect, useState, useRef } from 'react'

import './rateCheckUp.css'

const RateCheckUp = () => {
  const gradeRef = useRef()
  const commentRef = useRef()
  return (
    <form>
      <h3>Rate Check up</h3>
      <input value="Doctor Name" className="box" />
      <input value="2022-01-01" className="box" />
      <input ref={gradeRef} placeholder="Grade" className="box" />
      <input ref={commentRef} placeholder="Comment" className="box" />
      <input
        type="submit"
        value="Rate"
        className="btn"
        //onClick={onSubmit}
      />
    </form>
  )
}

export default RateCheckUp
