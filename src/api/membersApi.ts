import axios from "axios";

export type IMember = {
  _id: string;
  name: string;
  title: string;
  url: string;
};

const MembersApi = axios.create({
  baseURL: "https://careers-node-server.herokuapp.com/members",
});

export default MembersApi;
