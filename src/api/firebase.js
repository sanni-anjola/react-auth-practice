import axios from "axios";

export const firebase = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY,
  },
});
