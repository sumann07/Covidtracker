import React from "react";

import Route from "./components/route/Route"
import axios from "axios"
import { getCookie, signout } from "./components/auth/Util";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.interceptors.request.use((config) => {
  const token = getCookie("token");
  config.headers.Authorization = token;

  return config;
});

// null for success, and second parameter cllback for failure
axios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    signout(() => {
      window.location.href = "/signin";
    });
  }

  return Promise.reject(error);
});

export default function App() {
  return (
    <>
     
       <Route />
    </>
  );
}
