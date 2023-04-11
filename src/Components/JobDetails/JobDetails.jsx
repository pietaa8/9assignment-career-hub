import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const {jobId}=useParams();
    const jobs=useLoaderData();
    const [jobDetails, setJobDetails] = useState({});
    useEffect(() => {
        if (jobs && jobs.length) {
          const job = jobs.find(job => job.id == jobId);
          setJobDetails(job);
        }
      }, [jobs, jobId]);
      

    const {jobResponsibility,educationalRequirements,experiences}=jobDetails;

    
      
    return (
        <div>
            <h2 className=' text-lg text-center '>Job Details</h2>

            <div className='flex'>
            <div>
              <h3>{experiences}</h3>

              </div>
               <div>
    
            </div>
            </div>

        </div>
    );
};

export default JobDetails;