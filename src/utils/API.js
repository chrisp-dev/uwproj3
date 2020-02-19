import axios from 'axios';
const URL = 'localhost:8080';
// const URL = *whatever our deployed heroku link is*

const API = {
    getUsers: () => { },
    postLike: () => { },
    postNope: () => { },
    postUndo: () => { },
    saveSettings: () => { },
    uploadImage: () => { },
    sendMessage: () => { },
    receiveMessage: () => { },
    chatSubscribe: () => { },
    bulkPost: () => { },
    login:(user)=>{
        return axios.post(`${URL}/api/auth/login`,user,{withCredentials:true})
    }
}

export default API;