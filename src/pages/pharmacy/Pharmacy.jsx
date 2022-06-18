import React, {useState, useEffect} from 'react'
import './pharmacy.css'

import { useNavigate } from 'react-router-dom'
import CreateRecipe from '../../components/pharmacyComponents/CreateRecipe';
import GetMedicine from '../../components/pharmacyComponents/GetMedicine';

const Pharmacy = () => {

const user = JSON.parse(localStorage.getItem("user"));
const role = user.data.role;   
const doctorName = `${user.data.firstName} ${user.data.lastName}`
const navigate = useNavigate(); 

const [isRecipe, setIsRecipe] = useState(true)

const [title, setTitle] = useState({
        greenText: 'Create',
        text: 'Recipe',
    })
    
    const changeViewOnClick = () => {
        setIsRecipe((prevIsRecipe) => !prevIsRecipe)
      }
       
  useEffect(() => {
    if(role !== "Doctor")
    {
      navigate("/");
      window.location.reload();
    }
  }, [])

  useEffect(() => {
    if (isRecipe) {
      setTitle({
        greenText: 'Create',
        text: 'Recipe',
      })
    } else {
      setTitle({
        greenText: 'Get',
        text: 'Medicine',
      })
    }
  }, [isRecipe])

  return (
      <>
      <h3 className="heading-pharmacy">
      {title.greenText} <span>{title.text}</span>
        </h3>
        <p onClick={changeViewOnClick} className="span-login-signup center">
        {isRecipe === true ? 'Get Medicine' : 'Create Recipe'}
      </p>
        <div className='center'>
        { isRecipe === true ? <CreateRecipe doctorName={doctorName}/> : <GetMedicine/>}
        </div>
      </>
  )
}

export default Pharmacy