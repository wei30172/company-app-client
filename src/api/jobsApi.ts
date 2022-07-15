import axios from "axios";

export type JobItemType = {
  _id: string;
  title: string;
  url: string;
};

const JobsApi = axios.create({
  baseURL: "https://careers-node-server.herokuapp.com/jobs",
});

export default JobsApi;
