import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
    "api_key": '8eef453e19b12f58ee71ae7854e746e1',
    "language": "zh-CN"
}

export default axios;