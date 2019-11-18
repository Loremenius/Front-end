import axios from "axios";

axiosWithAuth = () =>{
    return axios.create({
        headers: {
          authorization: sessionStorage.getItem("token")
        }
      });
}