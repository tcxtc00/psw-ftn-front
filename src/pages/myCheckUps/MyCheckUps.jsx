import React, { useEffect, useState } from 'react'

import { checkUpService } from '../../api/CheckupService'
import './myCheckups.css'
import CheckUp from '../../components/CheckUp'
import '../checkUps/checkups.css'
import RateCheckUp from '../../components/myCheckUpsComponents/RateCheckUp'

import { toast } from 'react-toastify'

const MyCheckUps = () => {
  const [checkUps, setCheckUps] = useState([])
  const [historyCheckUps, setHistoryCheckUps] = useState([]);

  const [resCancelCheckUp, setResCancelCheckUp] = useState(null)
  const [resGradeCheckUp, setResGradeCheckUp] = useState(null)

  const [isHistoryCheckUps, setIsHistoryCheckUps] = useState(false)

  const changeCheckUpsOnClick = () => {
    setIsHistoryCheckUps((prevIsHistoryCheckUps) => !prevIsHistoryCheckUps)
  }

  const [title, setTitle] = useState({
    greenText: 'My',
    text: 'Check ups',
  })

  const cancelCheckUp = (checkUpId) => {
    return async (event) => {
      event.preventDefault()
      try {
        const res = await checkUpService.cancelCheckUp(checkUpId)
        setResCancelCheckUp(res)
        console.log(resCancelCheckUp)
        // if (resCancelCheckUp.success !== true) {
        //   toast.success('Success')
        // } else {
        //   toast.error(resCancelCheckUp.message)
        // }
      } catch (err) {
        toast.error(err.response.data.message)
        console.log(err.response.data)
      }
      // toast.success("Success");
      //console.log('canceledCheckUp', res);
    }
  }

  const rateCheckUp = (params) => {
    return async (event) => {
      event.preventDefault()
      try {
        const res = await checkUpService.rateCheckUp({...params})
        setResGradeCheckUp(res)
        console.log(resGradeCheckUp)

      } catch (err) {
        toast.error(err.response.data.message)
        console.log(err.response.data)
      }
    }
  }

  useEffect(() => {
    if (!isHistoryCheckUps) {
      setTitle({
        greenText: 'History',
        text: 'Check ups',
      })
    } else {
      setTitle({
        greenText: 'My',
        text: 'Check ups',
      })
    }
  }, [isHistoryCheckUps])

  useEffect(() => {
    ;(async () => {
      const responseCheckUps = await checkUpService.getFutureCheckUps()
      setCheckUps([...responseCheckUps])
      console.log('futureCheckUps', responseCheckUps)
    })()
  }, [setCheckUps, resCancelCheckUp])

  useEffect(() => {
    ;(async () => {
      const responseCheckUps = await checkUpService.getHistoryCheckUps()
      setHistoryCheckUps([...responseCheckUps])
      console.log('historyCheckUps', responseCheckUps)
    })()
  }, [setHistoryCheckUps, resGradeCheckUp])

  return (
    <>
      <h5 className="heading-checkup">
        <span>{title.greenText}</span> {title.text}
      </h5>
      <p onClick={changeCheckUpsOnClick} className="span-login-signup center">
        {isHistoryCheckUps === true ? 'History Check ups' : 'My Check ups'}
      </p>
      <div className="grid-container">
        {isHistoryCheckUps === true ? (
          checkUps && checkUps.length > 0 ? (
            checkUps.map((item, index) => (
              <CheckUp
                key={item.checkUpId}
                item={item}
                index={index + 1}
                cancelCheckUp={cancelCheckUp}
              />
            ))
          ) : null
        ) : (
          historyCheckUps && historyCheckUps.length > 0 ? 
          historyCheckUps.map((item,index) => (
            <RateCheckUp
              key={item.checkUpId}
              item={item}
              index={index + 1}
              rateCheckUp={rateCheckUp}
            />
          )) : null          
        )}
      </div>
    </>
  )
}

export default MyCheckUps