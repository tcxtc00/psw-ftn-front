import ApiService from "./ApiService";

const ENDPOINTS = {
    REGISTER: "/Auth/Register",
    LOGIN: "/Auth/Login",
  };

  class AuthService {

    register = async (params) =>{

      const response = await ApiService.post(ENDPOINTS.REGISTER, {...params})
      .then((response) => {
      if (response.data.data) {
           localStorage.setItem("user", JSON.stringify(response.data));
           console.log(localStorage);
          }
      return response.data
    }).catch(error => {
      return error.message;
    });

    return response;
  }

    login = async (params) =>{

        // const response = ApiService.post(ENDPOINTS.LOGIN, {...params});
        // return JSON.stringify(response.data);

        const response = await ApiService.post(ENDPOINTS.LOGIN, {...params})
        .then((response) => {
        if (response.data.data) {
             localStorage.setItem("user", JSON.stringify(response.data));
             //console.log(localStorage);
            }
        return response.data
      }).catch(error => {
        return error.message;
      });

      return response;
    }

    logout = () => {
        localStorage.removeItem("user");
    };

    getCurrentUser = () => {
        return JSON.parse(localStorage.getItem("user"));
      };
  }
  
  export const authService = new AuthService();
