import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'

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
      

    const {jobDescription,jobResponsibility,educationalRequirements,experiences,jobTitle,salary,phone,email}=jobDetails;

    
      
    return (
        <div>
            <h2 className=' text-lg text-center font-extrabold'>Job Details</h2>

            <div className='flex w-3/4 h-2/4 mt-10 p-28 text-center mx-52'>
            <div className='job'>
                <h1 ><span className='job-style'>Job Description:</span>:{jobDescription}</h1>
                <p><span className='job-style'>Job Resposibility:</span> {jobResponsibility}</p>
                <p><span className='job-style'>Educational Requirements:</span>{educationalRequirements}</p>
                <h3><span className='job-style'>Experiences</span> {experiences}</h3>

              </div>
               <div className='job-details'>
                <h1 className='text-lg text-center font-extrabold'>Job Details</h1>
                <p><span className='job-style'>Salary:</span>{salary}</p>
                <p><span className='job-style'>Job Title:</span> {jobTitle}</p>
                <h1 className='text-center ml-2 font-bold'>Contact Infromation</h1>
                <p><span className='job-style'>Phone:</span>{phone}</p>
                <p><span className='job-style'>email:</span>{email}</p>


                <button className='apply-btn'>Apply Now</button>  

    
            </div>
           
            </div>

        </div>
    );
};

export default JobDetails;