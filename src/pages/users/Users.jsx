import React, {useState, useEffect, useRef} from 'react'
import './users.css'

import { useNavigate } from 'react-router-dom'
import placeholderImg from '../../assets/user-placeholder.png'
import { adminService } from '../../api/AdminService'
import { toast } from 'react-toastify'
import NoData from '../../components/shared/NoData'

const Users = () => {

  const [isMalicious, setIsMalicious] = useState(true)

  const [maliciousUsers, setMaliciousUsers] = useState([])
  const [blockedUsers, setBlockedUsers] = useState([])

  const [resChangedStatus, setResChangedStatus] = useState(null)

  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.data.role; 
  const navigate = useNavigate();  

  const changeViewOnClick = () => {
    setIsMalicious((prevIsMalicious) => !prevIsMalicious)
  }
  
  const [title, setTitle] = useState({
    greenText: 'Create',
    text: 'Recipe',
})

useEffect(() => {
  if(role !== "Admin")
  {
    navigate("/");
    window.location.reload();
  }
  console.log(placeholderImg);
}, [])

useEffect(() => {
  if (isMalicious) {
    setTitle({
      greenText: 'Malicious',
      text: 'Users',
    })
   
  } else {
    setTitle({
      greenText: 'Blocked',
      text: 'Users',
    })
  }
}, [isMalicious])

useEffect(() => {
  ;(async () => {
    const responseData = await adminService.getMalicious();
    setMaliciousUsers([...responseData])
    console.log('maliciousUsers', responseData)
  })()
}, [setMaliciousUsers, resChangedStatus])

useEffect(() => {
  (async () => {
    const responseData = await adminService.getBlocked();
    setBlockedUsers([...responseData])
    console.log('blockedUsers', responseData)
  })()
}, [setBlockedUsers,resChangedStatus])

const onChangeStatus = (params) => {
  return async (event) => {
    event.preventDefault()
    try {
      const res = await adminService.changeStatus({...params})
      setResChangedStatus(res)
      console.log(res)

      if(res.status === 200)
      {
        toast.success("Success")
      }

    } catch (err) {
      toast.error(err.response.data.message)
      console.log(err.response.data)
    }
  }
}

  return (
    <>
    <h3 className="heading-pharmacy">
    <span>{title.greenText}</span> {title.text}
      </h3>
      <p onClick={changeViewOnClick} className="span-login-signup center">
      {isMalicious ? 'Blocked Users' : 'Malicious Users'}
    </p>
      {isMalicious && maliciousUsers.length === 0 ? <NoData text="No Malicious Users"/> : null}
      {!isMalicious && blockedUsers.length === 0 ? <NoData text="No Blocked Users"/> : null}
      <div className='center grid-container-users'>
        {isMalicious ? maliciousUsers.map((user) => (
          <div className="box-container-users" key={user.userId}>
          <div className="box">
           <img src={placeholderImg} alt="" />
            <h3>{user.firstName} {user.lastName}</h3>
            <span className="expertise-span">{user.expertise}</span>
            <input
              type="submit"
              value="Block"
              className="btn btn-users"
              onClick={onChangeStatus({userStatus: "Blocked", userId: user.userId})}
            />
            <input
            type="submit"
            value="Remove"
            className="btn btn-users"
            onClick={onChangeStatus({userStatus: "NotMalicious", userId: user.userId})}
          />
          </div>
          </div>
        )) : blockedUsers.map((user) => (
          <div className="box-container-users" key={user.userId}>
          <div className="box">
          <img src={placeholderImg} alt="" />
            <h3>{user.firstName} {user.lastName}</h3>
            <span className="expertise-span">{user.expertise}</span>
            <input
              type="submit"
              value="Unblock"
              className="btn btn-users"
              onClick={onChangeStatus({userStatus: "Active", userId: user.userId})}
            />
          </div>
          </div>
        ))}
    </div>
      
    </>
  )
}

export default Users