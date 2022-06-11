import ApiService from "./ApiService";
import authHeader from "./AuthHeader";

const ENDPOINTS = {
  GET_ALL_FEEDBACKS: "/Feedback/GetAll"
};

class FeedbackService {

  getAllFeedbacks = async () =>{
    const response = await ApiService.get(ENDPOINTS.GET_ALL_FEEDBACKS,{headers: authHeader()});
    return response.data.data;
  }
}

export const feedbackService = new FeedbackService();


