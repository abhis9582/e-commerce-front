//import { useEffect } from "react";
import axios from "axios";

export const loginApi = async (data) => {
  axios
    .post(process.env.REACT_APP_API_URL + "myapp/auth/authenticate", data)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //setPosts(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
