import axios from "axios";

//Create default axios instance
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Used to send diff http requests to a particular endpoint
class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // We add a generic type T to avoid a promise of any
  // We use arrow functions so that the this instance will refer to the API client instance
  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  post = (data: T) => {
    axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
