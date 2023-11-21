import axios from "axios";

const BASE_URL = "https://aivision-kenhtaitro.ap.ngrok.io";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    OriginReferer: window.location.origin,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});
