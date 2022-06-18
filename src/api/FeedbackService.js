import ApiService from "./ApiService";
import authHeader from "./AuthHeader";

const ENDPOINTS = {
  GET_ALL_FEEDBACKS: "/Feedback/GetAll",
  ADD_CLINIC_FEEDBACK: "/Feedback/Add",
  CHANGE_VISIBILITY: "/Feedback/IsVisible"
};

class FeedbackService {

  getAllFeedbacks = async () =>{
    const response = await ApiService.get(ENDPOINTS.GET_ALL_FEEDBACKS, {headers: authHeader()});
    return response.data.data;
  }

  leaveFeedback = async (params) =>{
    const responseData =  await ApiService.post(ENDPOINTS.ADD_CLINIC_FEEDBACK, {...params}, {headers: authHeader()})
    return responseData;
  }

  changeVisibility = async (params) =>{
    const responseData =  await ApiService.put(`${ENDPOINTS.CHANGE_VISIBILITY}?feedbackId=${params.feedbackId}&showFeedback=${params.showFeedback}`, {...params}, {headers: authHeader()})
    return responseData;
  }
}

export const feedbackService = new FeedbackService();


