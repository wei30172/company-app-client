import axios from "axios";
import getError from "../utils/getError";
import { toast } from "react-hot-toast";

const JobApi = axios.create({
  baseURL: "https://careers-node-server.herokuapp.com/job",
});

export type ApplicationInputsType = {
  jobId: string;
  name: string;
  email: string;
  url: string;
};

export const addApplication = async (
  id: string,
  inputs: ApplicationInputsType,
) => {
  try {
    const { data } = await JobApi.post(`/${id}`, inputs);
    toast.success("Your application has been received.", {
      duration: 3000,
      iconTheme: {
        primary: "#ff6363",
        secondary: "#161616",
      },
    });
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error(getError(error));
    }
    return;
  }
};

export default JobApi;
