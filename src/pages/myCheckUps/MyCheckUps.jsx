import React, { useEffect, useState } from "react";

import { checkUpService } from "../../api/CheckupService";

import './myCheckups.css'

import CheckUp from "../../components/CheckUp";

import "../checkUps/checkups.css";

const MyCheckUps = () => {
  const [checkUps, setCheckUps] = useState([]);

  const [title, setTitle] = useState({
    greenText: 'My',
    text: 'Check ups',
  })

  // useEffect(() => {
  //   const fetchCheckUps = async () => {
  //     api.get("/CheckUp/GetPatientCheckUps/FutureCheckUps", {
  //         headers: {
  //           'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
  //         }
  //     }).then(res => {
  //       setCheckUps(res.data.data);
  //     }).catch(err =>console.log(err));  
  //   }
  //   fetchCheckUps();
  // }, []);

  useEffect(() => {
    (async () => {
      const responseCheckUps = await checkUpService.getFutureCheckUps();
      setCheckUps([...responseCheckUps]);
      console.log('futureCheckUps', responseCheckUps);
    })();
  }, [setCheckUps]);


  return (
    <>
    <h5 className="heading-checkup">
        <span>{title.greenText}</span> {title.text}
      </h5>
    <div className="grid-container">
    {checkUps && checkUps.length > 0 ?
      checkUps.map((item, index) => (
      <CheckUp key={item.checkUpId} item={item} index = {index + 1} />
    )) : null }
  </div>
  </>
  );
};

export default MyCheckUps;
