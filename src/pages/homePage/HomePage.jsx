import React, {useEffect} from 'react'
import './homePage.css'
import Home from '../../components/homePageComponents/home/Home'
import OurServices from '../../components/homePageComponents/ourServices/OurServices'
import About from '../../components/homePageComponents/about/About'
import OurDoctors from '../../components/homePageComponents/ourDoctors/OurDoctors'
import BookNow from '../../components/homePageComponents/bookNow/BookNow'
import ClientsReview from '../../components/homePageComponents/clientsReview/ClientsReview'
import Footer from '../../components/homePageComponents/footer/Footer'
import {authService} from "../../api/AuthService"
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    if(authService.getCurrentUser() === null)
    {
      navigate("/registration");
      window.location.reload();
    }
  }, []);

  return (
    <div>
      <Home />
      <OurServices />
      <About />
      <OurDoctors />
      <BookNow />
      <ClientsReview />
      <Footer />
    </div>
  )
}

export default HomePage
