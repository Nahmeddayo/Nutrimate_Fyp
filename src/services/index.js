import axios from "axios";
// let baseUrl = "http:/ 192.168.1.110:5000/api/";
let baseUrl = "https://nutrimate-server.vercel.app/api/";


 
const api = async (path, params, method) => {
    let options;
    options = {
        headers: {
            "Content-Type": "application/json",
        },
        method: method,
        ...(params && { data: JSON.stringify(params) }),
    };
    return axios(baseUrl + path, options)
        .then((response) => {
            return response;
        })
        .catch(async (error) => {
            return error.response;
        });
};

export default api;