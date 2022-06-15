import React, { useRef, useState } from 'react'
import ReactDom from 'react-dom'
import "./modalFeedback.css"

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
}

const ModalFeedback = ({ open, children, onClose, title, leaveFeedback }) => {
  const gradeRef = useRef()
  const commentRef = useRef()
  const incognitoRef = useRef()

  const [comment, setComment] = useState('')
  const [grade, setGrade] = useState(1)
  const [isIncognito, setIsIncognito] = useState(false);

  const getCommentFromInput = () => {
    setComment(commentRef.current.value)
  }

  const getGradeFromSelect = () => {
    setGrade(gradeRef.current.value)
  }

  const getIncognitoFroCheck = () => {
    setIsIncognito(incognitoRef.current.checked)
  }

  const grades = [
    {
      label: 'Very Bad',
      value: 1,
    },
    {
      label: 'Bad',
      value: 2,
    },
    {
      label: 'Good',
      value: 3,
    },
    {
      label: 'Very Good',
      value: 4,
    },
    {
      label: 'Excellent',
      value: 5,
    },
  ]

  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
      <h3 className="heading-feedback">
      Leave <span>Feedback</span>
        </h3>
        <form className='box-review'>
          <select
            ref={gradeRef}
            onChange={getGradeFromSelect}
            name="Grade"
            className="box-selector center"
          >
            {grades.map((grade) => (
              <option key={grade.value} value={grade.value}>
                {grade.label}
              </option>
            ))}
          </select>
          <label className='label'>
          <input 
            ref={incognitoRef} 
            type="checkbox"
            onChange={getIncognitoFroCheck}/>
          Remain Anonimus
          </label>
          <textarea
            ref={commentRef}
            placeholder="Comment"
            type="textarea"
            className="box-selector textarea-feedback"
            onChange={getCommentFromInput}
          />
          <input
            type="submit"
            value="Rate"
            className="btn"
            onClick={leaveFeedback({ grade: grade, comment: comment, incognito: isIncognito})}
          />
        </form>
      </div>
    </>,
    document.getElementById('portal'),
  )
}

export default ModalFeedback
