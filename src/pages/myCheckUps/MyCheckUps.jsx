import React, { useEffect, useState } from 'react'

import { checkUpService } from '../../api/CheckupService'
import './myCheckups.css'
import CheckUp from '../../components/CheckUp'
import '../checkUps/checkups.css'
import RateCheckUp from '../../components/myCheckUpsComponents/RateCheckUp'
import NoData from '../../components/shared/NoData'

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
        console.log(resCancelCheckUp)

        if(res.status === 200)
        {
          toast.success("Success")
          setResCancelCheckUp(res)
        }
      } catch (err) {
        toast.error(`${err.response.status}: ${err.response.data.message}`)
        console.log(err.response.data)
      }
    }
  }

  const rateCheckUp = (params) => {
    return async (event) => {
      event.preventDefault()
      try {
        const res = await checkUpService.rateCheckUp({...params})
        console.log(resGradeCheckUp)

        if(res.status === 200)
        {
          toast.success("Success")
          setResGradeCheckUp(res)
        }

      } catch (err) {
        toast.error(`${err.response.status}: ${err.response.data.message}`)
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
      {isHistoryCheckUps === true && (checkUps && checkUps.length > 0) ?
      <div className="grid-container-checkup">
          {checkUps.map((item, index) => (
            <CheckUp
              key={item.checkUpId}
              item={item}
              index={index + 1}
              cancelCheckUp={cancelCheckUp}
            />
          ))}
      </div> : isHistoryCheckUps === true ? <NoData text="You don't have any Check Ups" /> : null } 

      {isHistoryCheckUps === false && (historyCheckUps && historyCheckUps.length > 0) ?
        <div className="grid-container-checkup">
            {historyCheckUps.map((item,index) => (
              <RateCheckUp
                key={item.checkUpId}
                item={item}
                index={index + 1}
                rateCheckUp={rateCheckUp}
              />
            ))}
        </div> :  isHistoryCheckUps === false ?  <NoData text="You don't have any Check Ups in History" /> : null} 
    </>
  )
}

export default MyCheckUps