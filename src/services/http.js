import axios from "axios";
axios.defaults.baseURL = "https://jsoneditoronline.org";
const http = {
  get: axios.get,
};

export default http;
