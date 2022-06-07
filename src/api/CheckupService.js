import ApiService from "./ApiService";

const ENDPOINTS = {
  FUTURE_CHECKUPS: "/CheckUp/GetPatientCheckUps/FutureCheckUps",
  HISTORY_CHECKUPS: "/",
  GET_ALL_DOCTORS: "/CheckUp/GetAllDoctors"
};

class CheckUpService {
  getFutureCheckUps = async () =>{
    const response = await ApiService.get(ENDPOINTS.FUTURE_CHECKUPS,{
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
          }
    });
    return response.data.data;
  }

  getAllDoctors = async () =>{
    const response = await ApiService.get(ENDPOINTS.GET_ALL_DOCTORS,{
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
          }
    });
    return response.data.data;
  }
}

export const checkUpService = new CheckUpService();


