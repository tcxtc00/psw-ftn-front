import ApiService from "./ApiService";

const ENDPOINTS = {
  GET_ALL_FEEDBACKS: "/Feedback/GetAll"
};

class FeedbackService {

  getAllFeedbacks = async () =>{
    const response = await ApiService.get(ENDPOINTS.GET_ALL_FEEDBACKS,{
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN}`
          }
    });
    return response.data.data;
  }
}

export const feedbackService = new FeedbackService();


