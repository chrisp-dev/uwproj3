import axios from "axios";
const URL = "http://localhost:8080";
// const URL = *whatever our deployed heroku link is*

const API = {
  getUser: id => axios.get(`${URL}/api/user/${id}`, { withCredentials: true }),
  getUsers: () => {},
  postLike: id => {
    // axios.post(`${URL}/like/${id}`);
    return true;
  },
  postNope: id => {
    // axios.post(`${URL}/nope/${id}`)
    return true;
  },
  postUndo: () => {},
  saveSettings: () => {},
  uploadImage: info => {
    return axios.post(`${URL}/api/image/upload`, info, { withCredentials: true });
  },
  singleImage: id => {
    return axios.get(`${URL}/api/image/${id}`, {withCredentials: true})
  },
  sendMessage: () => {},
  receiveMessage: () => {},
  chatSubscribe: () => {},
  bulkPost: () => {},
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
