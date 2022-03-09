import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    "Accept-language": "en",
  },
  params: {
    "api_key": "325eda172d12c2952710ea34d3148a06",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
      console.log(config)
    config.headers["Authorization"] = "jjgugyfyfctg";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
