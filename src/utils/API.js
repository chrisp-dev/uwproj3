import axios from "axios";
import config from "./Constants";
const URL = config.API_URL;
// const URL = *whatever our deployed heroku link is*

const API = {
  getUser: id => axios.get(`${URL}/api/user/${id}`, { withCredentials: true }),
  getUsers: () => { },
  loadSwipees: () => axios.get(`${URL}/api/swipe/load`),
  postLike: id => axios.post(`${URL}/api/swipe/like/${id}`),
  postNope: id => axios.post(`${URL}/api/swipe/nope/${id}`),
  postUndo: () => { },
  saveSettings: () => { },
  uploadImage: info => {
    return axios.post(`${URL}/api/image/upload`, info, { withCredentials: true });
  },
  singleImage: id => {
    return axios.get(`${URL}/api/image/${id}`, { withCredentials: true })
  },
  sendMessage: () => { },
  receiveMessage: id => axios.get(`${URL}/api/message/receiver/${id}`, { withCredentials: true }),
  chatSubscribe: () => { },
  bulkPost: () => { },
  login: user => {
    return axios.post(`${URL}/api/auth/login`, user, { withCredentials: true });
  },
  signup: user => {
    return axios.post(`${URL}/api/auth/signup`, user, { withCredentials: true });
  },
  loggedinuser: () => {
    return axios.get(`${URL}/api/auth/loggedinuser`, { withCredentials: true });
  },
  logout: () => {
    return axios.get(`${URL}/api/auth/logout`, { withCredentials: true });
  }
};

export default API;
