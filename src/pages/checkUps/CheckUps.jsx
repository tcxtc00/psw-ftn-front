import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import CheckUp from '../../components/CheckUp'
import './checkups.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { checkUpService } from '../../api/CheckupService'

const CheckUps = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const [response, setResponse] = useState([]);

  // const checkUps = [
  //   {
  //     id: 0,
  //     title: 'Appointment num 1',
  //     doctor: 'Branimir Nestorovic',
  //   },
  //   {
  //     id: 1,
  //     title: 'Appointment num 2',
  //     doctor: 'Miodrag Petrovic',
  //   },
  //   {
  //     id: 2,
  //     title: 'Appointment num 3',
  //     doctor: 'Branimir Nestorovic',
  //   },
  //   {
  //     id: 3,
  //     title: 'Appointment num 4',
  //     doctor: 'Nada Macura',
  //   },
  //   {
  //     id: 4,
  //     title: 'Appointment num 5',
  //     doctor: 'Branimir Nestorovic',
  //   },
  //   {
  //     id: 5,
  //     title: 'Appointment num 6',
  //     doctor: 'Zeljko Mitrovic',
  //   },
  //   {
  //     id: 6,
  //     title: 'Appointment num 7',
  //     doctor: 'Branimir Nestorovic',
  //   },
  //   {
  //     id: 7,
  //     title: 'Appointment num 8',
  //     doctor: 'Branimir Nestorovic',
  //   },
  //   {
  //     id: 8,
  //     title: 'Appointment num 9',
  //     doctor: 'Nada Macura',
  //   },
  // ]

  const bookCheckUp = (checkUpId, patientId) => {
    var params = {
      checkUpId: checkUpId,
      patientId: patientId
    }
    console.log(checkUpId);
    return async(event) => {
      event.preventDefault();
      const res = await checkUpService.bookCheckUp(params);
      setResponse(res);
      //console(response.data.data.message);
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
       
        console.log('futureCheckUps', responseCheckUps);
      // }catch{
      //     setCheckUps([]);
      // }
    })();
  }, [setCheckUps, response]);

  // const changeTitleOnClick = () => {
  //   setIsSignUpForm((prevIsSignUpForm) => !prevIsSignUpForm)
  // }

  return (
    <>
      <h5 className="heading-checkup">
        <span>{title.greenText}</span> {title.text}
      </h5>
      <div className="grid-container">
      {checkUps && checkUps.length > 0 ?
        checkUps.map((item, index) => (
        <CheckUp key={item.checkUpId} item={item} index = {index + 1} bookCheckUp={bookCheckUp} />
      )) : null }
      </div>
    </>
  )
}

export default CheckUps
