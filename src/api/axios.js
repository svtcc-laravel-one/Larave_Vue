import axios from "axios";

const instance = axios.create({
    baseURL: 'http://www.svtpro.com/api/',
    timeout: 1000,

});
export  default instance;
