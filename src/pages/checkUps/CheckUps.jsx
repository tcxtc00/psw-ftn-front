import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import CheckUp from '../../components/CheckUp'
import './checkups.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoData from '../../components/shared/NoData'

import { checkUpService } from '../../api/CheckupService'

const CheckUps = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const [response, setResponse] = useState([]);

  const bookCheckUp = (checkUpId, patientId) => {
    
    var params = {
      checkUpId: checkUpId,
      patientId: patientId
    }

    return async(event) => {
      try{
        event.preventDefault();
        const res = await checkUpService.bookCheckUp(params);
        setResponse(res);

        if(res.status === 200)
        {
          res.data.success ? toast.success("Success") : toast.error(res.data.data.message);
        }
  
      }catch (err){
          toast.error(`${err.response.status}: ${err.response.data.message}`)
          console.log(err.response.data)
      }
    }
  };

  const [checkUps, setCheckUps] = useState([]);
  //Used data of checkUpQuery that were send form bookNow component
  const  {state}  = useLocation();

  const [title, setTitle] = useState({
    greenText: 'Available',
    text: 'Check ups',
  })

  useEffect(() => {
    (async () => {
      //try{
        const responseCheckUps = await checkUpService.getAvailableCheckUps(state);
        if(responseCheckUps !== null)
        {
          setCheckUps([...responseCheckUps])
        }
        else {
          setCheckUps([])
        }
       
        console.log('availableCheckUps', responseCheckUps);
      // }catch{
      //     setCheckUps([]);
      // }
    })();
  }, [setCheckUps, response]);

  return (
    <>
      <h5 className="heading-checkup">
        <span>{title.greenText}</span> {title.text}
      </h5>
      {checkUps && checkUps.length === 0 ? <NoData text={"No Available Checkups"}/> :
      <div className="grid-container">
      {checkUps && checkUps.length > 0 ?
        checkUps.map((item, index) => (
        <CheckUp key={item.checkUpId} item={item} index = {index + 1} bookCheckUp={bookCheckUp} />
      )) : null }
      </div>
      }
    </>
  )
}

export default CheckUps
