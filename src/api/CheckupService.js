import ApiService from "./ApiService";
import authHeader from "./AuthHeader";

const ENDPOINTS = {
  FUTURE_CHECKUPS: "/CheckUp/GetPatientCheckUps/FutureCheckUps",
  HISTORY_CHECKUPS: "/CheckUp/GetPatientCheckUps/HistoryCheckUps",
  GET_ALL_DOCTORS: "/CheckUp/GetAllDoctors",
  GET_ALL_PATIENTS: "/CheckUp/GetAllPatients",
  GET_DOCTORS_BY_EXPERTISE: "/CheckUp/GetDoctorsByExpertise/?expertise=",
  GET_AVAILABLE_CHECKUPS: "/CheckUp/GetAvailableCheckUps",
  CANCEL_CHECKUP: "/CheckUp/Cancel?checkUpId=",
  ADD_FEEDBACK: "/CheckUp/AddFeedback",
  BOOK_CHECKUP: "/CheckUp/Book"
};

class CheckUpService {
  getFutureCheckUps = async () =>{
    const response = await ApiService.get(ENDPOINTS.FUTURE_CHECKUPS, {headers: authHeader()});
    return response.data.data;
  }

  getHistoryCheckUps = async () =>{
    const response = await ApiService.get(ENDPOINTS.HISTORY_CHECKUPS, {headers: authHeader()});
    return response.data.data;
  }

  getAllDoctors = async () =>{
    const response = await ApiService.get(ENDPOINTS.GET_ALL_DOCTORS, {headers: authHeader()});
    return response.data.data;
  }

  getAllPatients = async () =>{
    const response = await ApiService.get(ENDPOINTS.GET_ALL_PATIENTS, {headers: authHeader()});
    return response.data.data;
  }

  getDoctorsByExpertise = async (expertise) =>{
    const response = await ApiService.get(`${ENDPOINTS.GET_DOCTORS_BY_EXPERTISE}${expertise}`, {headers: authHeader()});
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

  rateCheckUp = async (params) =>{
    const responseData =  await ApiService.post(ENDPOINTS.ADD_FEEDBACK, {...params}, {headers: authHeader()})
    return responseData;
  }

  bookCheckUp = async (params) =>{
  const responseData = await ApiService.put(ENDPOINTS.BOOK_CHECKUP, {...params}, {headers: authHeader()})
  return responseData;
  }
}

export const checkUpService = new CheckUpService();


