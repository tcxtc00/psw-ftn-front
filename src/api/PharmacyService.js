import ApiService from "./ApiService";
import authHeader from "./AuthHeader";

const ENDPOINTS = {
  POST_RECIPE: "/Pharmacy/Recipe",
  POST_MEDICINE: "/Pharmacy/GetMedicine"
};

class PharmacyService {
  
    postMedicine = async (params) =>{
      const response = await ApiService
      .post(`${ENDPOINTS.POST_MEDICINE}/${params.name}/${params.quantity}`,{...params}, {headers: authHeader()});
      return response;
    }
  
    postRecipe = async (params) =>{
      const responseData =  await ApiService.post(ENDPOINTS.POST_RECIPE, {...params}, {headers: authHeader()})
      return responseData;
    }
  }
  
  export const pharmacyService = new PharmacyService();