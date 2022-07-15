import React from "react";
import { addApplication, IApplicationInputs } from "../../api/jobApi";
import { IJob } from "../../api/jobsApi";
import FormInput, { InputType } from "../Form/FormInput";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import "./jobSidebar.scss";

type Props = {
  applyJob: IJob;
  showJobSidebar: boolean;
  setShowJobSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  applyInputs: IApplicationInputs;
  setApplyInputs: React.Dispatch<React.SetStateAction<IApplicationInputs>>;
};

const JobSidebar = ({
  applyJob,
  showJobSidebar,
  setShowJobSidebar,
  applyInputs,
  setApplyInputs,
}: Props) => {
  const formInputs: InputType[] = [
    {
      id: 1,
      label: "Name",
      errorMessage:
        "Name should be 2-16 characters and shouldn't include any special character.",
      name: "name",
      type: "text",
      placeholder: "Name",
      pattern: "^[A-Za-z0-9]{2,16}$",
      required: true,
    },
    {
      id: 2,
      label: "Email",
      errorMessage: "Email should be a valid email address.",
      name: "email",
      type: "email",
      placeholder: "Email",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
      required: true,
    },
    {
      id: 3,
      label: "Linkedin URL",
      errorMessage: "Linkedin URL is required.",
      name: "url",
      type: "text",
      placeholder: "Linkedin URL",
      required: true,
    },
  ];

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setApplyInputs({ ...applyInputs, [target.name]: target.value });
  };

  const handleJobSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addApplication(applyInputs.jobId, applyInputs);
    setShowJobSidebar(!showJobSidebar);
    setApplyInputs({ jobId: "", name: "", email: "", url: "" });
  };

  return (
    <div className={!showJobSidebar ? "job-sidebar-hidden" : "job-sidebar"}>
      <div onClick={() => setShowJobSidebar(false)}>
        <HighlightOffIcon className="cursor-pointer" />
      </div>
      <form onSubmit={handleJobSubmit}>
        <>
          <div className="form_title">
            <a href={applyJob.url} target="_blank" rel="noreferrer">
              <p className="cursor-pointer">{applyJob.title}</p>
            </a>
          </div>
          {formInputs.map((input: InputType) => (
            <FormInput
              key={input.id}
              {...input}
              value={applyInputs[input.name as keyof IApplicationInputs]}
              handleChange={handleChange}
            />
          ))}
          <input
            type="submit"
            value="Submit"
            className="cursor-pointer btn _primary"
          />
        </>
      </form>
    </div>
  );
};

export default JobSidebar;
