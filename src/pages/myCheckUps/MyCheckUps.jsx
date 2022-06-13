import React, { useEffect, useState } from "react";

import { checkUpService } from "../../api/CheckupService";
import './myCheckups.css'
import CheckUp from "../../components/CheckUp";
import "../checkUps/checkups.css";

import {toast} from 'react-toastify'

const MyCheckUps = () => {
  const [checkUps, setCheckUps] = useState([]);

  const [resCancelCheckUp, setResCancelCheckUp] = useState(null);

  const [title, setTitle] = useState({
    greenText: 'My',
    text: 'Check ups',
  })

  const cancelCheckUp = (checkUpId) => {

    return async(event) => {
      event.preventDefault();
      try{
        const res = await checkUpService.cancelCheckUp(checkUpId);
        setResCancelCheckUp(res);
        console.log(resCancelCheckUp);

        if(resCancelCheckUp.success !== true)
        {
          toast.success("Success")
        }
        else {
          toast.error(resCancelCheckUp.message)
        }
      }catch(err){
        toast.error(err.response.data.message)
        console.log(err.response.data)
      }
      // toast.success("Success");
      //console.log('canceledCheckUp', res);
    }
  }

  useEffect(() => {
    (async () => {
      const responseCheckUps = await checkUpService.getFutureCheckUps();
      setCheckUps([...responseCheckUps]);
      console.log('futureCheckUps', responseCheckUps);
    })();
  }, [setCheckUps, resCancelCheckUp]);

  return (
    <>
    <h5 className="heading-checkup">
        <span>{title.greenText}</span> {title.text}
      </h5>
    <div className="grid-container">
    {checkUps && checkUps.length > 0 ?
      checkUps.map((item, index) => (
      <CheckUp key={item.checkUpId} item={item} index = {index + 1} cancelCheckUp={cancelCheckUp} />
    )) : null }
  </div>
  </>
  );
};

export default MyCheckUps;
