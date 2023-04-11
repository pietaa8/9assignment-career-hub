import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job=useLoaderData();
    console.log(job);
    return (
        <div>
            <h2 className=' text-lg text-center '>Job Details</h2>
            <p>{job.location}</p>

        </div>
    );
};

export default JobDetails;