import { toast } from "react-toastify";
import ApiService from "./ApiService";
import authHeader from "./AuthHeader";

const ENDPOINTS = {
  FUTURE_CHECKUPS: "/CheckUp/GetPatientCheckUps/FutureCheckUps",
  HISTORY_CHECKUPS: "/",
  GET_ALL_DOCTORS: "/CheckUp/GetAllDoctors",
  GET_DOCTORS_BY_EXPERTISE: "/CheckUp/GetDoctorsByExpertise/?expertise=",
  GET_AVAILABLE_CHECKUPS: "/CheckUp/GetAvailableCheckUps",
  CANCEL_CHECKUP: "/CheckUp/Cancel?checkUpId=",
  BOOK_CHECKUP: "/CheckUp/Book"
};

class CheckUpService {
  getFutureCheckUps = async () =>{
    const response = await ApiService.get(ENDPOINTS.FUTURE_CHECKUPS, {headers: authHeader()});
    return response.data.data;
  }

  getAllDoctors = async () =>{
    const response = await ApiService.get(ENDPOINTS.GET_ALL_DOCTORS, {headers: authHeader()});
    return response.data.data;
  }

  getDoctorsByExpertise = async (params) =>{
    const response = await ApiService.get(`${ENDPOINTS.GET_DOCTORS_BY_EXPERTISE}${params.expertise}`, {headers: authHeader()});
    return response.data.data;
  }

  getAvailableCheckUps = async (params) =>{
    const response = await ApiService
    .get(`${ENDPOINTS.GET_AVAILABLE_CHECKUPS}/${params.doctorId}/${params.startIntervalTime}/${params.endIntervalTime}/${params.priority}`, {headers: authHeader()});
    return response.data.data;
  }

  cancelCheckUp = async (checkUpId) =>{
    const responseData =  await ApiService.put(`${ENDPOINTS.CANCEL_CHECKUP}${checkUpId}`, checkUpId, {headers: authHeader()})
    return responseData;
  }

  bookCheckUp = async (params) =>{
 
  let responseData = null 

   await ApiService.put(ENDPOINTS.BOOK_CHECKUP, {...params}, {headers: authHeader()})
    .then(response =>  responseData = response.data)
    .catch(error => {
        console.error(error.response.data.message, error);
        responseData = error;
    });
    return responseData.data;
  }
}

export const checkUpService = new CheckUpService();


