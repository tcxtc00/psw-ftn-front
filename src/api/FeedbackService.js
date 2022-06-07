import ApiService from "./ApiService";

const ENDPOINTS = {
  GET_ALL_FEEDBACKS: "/CheckUp/GetAllDoctors"
};

class CheckUpService {

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


