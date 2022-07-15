import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import jobsApi, { IJob } from "../../api/jobsApi";
import { IApplicationInputs } from "../../api/jobApi";
import { JobSidebar } from "../index";
import { scrollToSection } from "../../utils/scrollToSection";

import "./job.scss";

type Ref = HTMLDivElement;
type Props = {};

const Jobs = React.forwardRef<Ref, Props>((props, ref) => {
  const { data, loading, error } = useFetch<IJob>(jobsApi);
  const [jobs, setJobs] = useState([] as IJob[]);
  const [showJobSidebar, setShowJobSidebar] = useState(false);
  const [applyInputs, setApplyInputs] = useState<IApplicationInputs>({
    jobId: "",
    name: "",
    email: "",
    url: "",
  });
  const [applyJob, setApplyJob] = useState<IJob>({
    _id: "",
    title: "",
    url: "",
  });

  useEffect(() => {
    if (data) setJobs(data);
  }, [data]);

  const handleApply = (job: IJob) => {
    scrollToSection(ref as React.RefObject<HTMLDivElement>);
    setApplyInputs({ ...applyInputs, jobId: job._id });
    setApplyJob(job);
    setShowJobSidebar(true);
  };

  return (
    <div ref={ref} className="job">
      <div className="job_container">
        {/* title */}
        <div className="job_title">
          <p>Join Us</p>
        </div>

        {/* jobs*/}
        <div className="jobs">
          {/* job */}
          {error ? (
            <p>{error}</p>
          ) : loading ? (
            <p>loading...</p>
          ) : !jobs.length ? (
            <p>No Jobs to display.</p>
          ) : (
            jobs.map((job) => (
              <div key={job._id} className="jobs_item shadow-lg">
                <div>
                  <div className="jobs_item_title">
                    <p>{job.title},</p>
                    <p>Menlo Park</p>
                  </div>
                  {/* hover effects */}
                  <div className="jobs_item_button">
                    <button
                      className="btn _primary"
                      onClick={() => handleApply(job)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* job sidebar */}
        <JobSidebar
          applyJob={applyJob}
          showJobSidebar={showJobSidebar}
          setShowJobSidebar={setShowJobSidebar}
          applyInputs={applyInputs}
          setApplyInputs={setApplyInputs}
        />
      </div>
    </div>
  );
});

export default Jobs;
