import React, { useEffect, useState } from 'react';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    // Retrieve the applied jobs from local storage
    const appliedJobsString = localStorage.getItem('appliedJobs');
    const appliedJobs = JSON.parse(appliedJobsString) || [];

    setAppliedJobs(appliedJobs);
  }, []);
    return (
        <div>
             <h2>Applied Jobs</h2>
      <ul>
        {appliedJobs.map(job => (
          <li key={job.id}>
            <h3>{job.jobTitle}</h3>
            <p>{job.companyName}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <p>{job.fulltimeOrPartTime}</p>
          </li>
        ))}
      </ul>
            
        </div>
    );
};

export default AppliedJobs;