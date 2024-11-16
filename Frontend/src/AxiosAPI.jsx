import axios from "axios";

export const url="http://localhost:5000/api/";

export const npmURL="http://localhost:5000/"
const AxiosApi=axios.create({
    baseURL:url
})
export default AxiosApi;