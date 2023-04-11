import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { Link } from 'react-router-dom';

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
      <h2 className='text-lg text-center font-extrabold'>Applied Jobs</h2>
      <ul>
        {appliedJobs.map(job => (
          <div className='p-10 mt-10 border-4 rounded-md w-3/5 h-72 ml-52 mr-52' key={job.id}>
            <img src={job.companyLogo} alt="" />
            <h3>{job.jobTitle}</h3>
            <p>{job.companyName}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <p>{job.fulltimeOrPartTime}</p>
            <button className='job-button'>
            <Link to={`job/${job.id}`}>View Details</Link>

                 </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
