import ApiService from "./ApiService";
import authHeader from "./AuthHeader";

const ENDPOINTS = {
  GET_MALICIOUS: "/User/GetMallicious",
  GET_BLOCKED: "/User/GetBlocked",
  CHANGE_STATUS: "/User/ChangeStatus"
};

class AdminService {
  
    getMalicious = async () =>{
      const response = await ApiService.get(ENDPOINTS.GET_MALICIOUS, {headers: authHeader()});
      return response.data.data;
    }

    getBlocked = async () =>{
      const response = await ApiService.get(ENDPOINTS.GET_BLOCKED, {headers: authHeader()});
      return response.data.data;
    }
  
    changeStatus = async (params) =>{
      const responseData =  await ApiService.put(`${ENDPOINTS.CHANGE_STATUS}?userStatus=${params.userStatus}&userId=${params.userId}`, {...params}, {headers: authHeader()})
      return responseData;
    }
}
  
export const adminService = new AdminService();