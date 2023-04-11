import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategories from '../JobCategories/JobCategories';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Homepage = () => {
    const [categories,setCategories]=useState([])
    const jobs=useLoaderData();

   useEffect(()=>{
    fetch('category.json')
    .then(res=>res.json())
    .then(data=>setCategories(data))
   },[])


    return (
        <div>
            <Banner></Banner>
            <div className=' mt-10 p-28 text-center'>
            <h1 className='font-extrabold text-lg'>Job Category List</h1>
            <p className='text-sm'>Exploring thousands of job opportunities with all the infromation I need.Its my future.</p>
               <div className='flex text-center p-28'>
               {
                  categories.map(category =><JobCategories
                    key={category.id}
                    category={category}>
                        
                    </JobCategories>)
                }
               </div>
               <div className='mt-10 p-28 text-center'>
               <h1 className='font-extrabold text-lg'>Featured Jobs</h1>
            <p className='text-sm'>Exploring thousands of job opportunities with all the infromation I need.Its my future.</p>
            <div>

            </div>
            {
                jobs.map(job=> <FeaturedJobs

                    key={job.id}
                    job={job}
                ></FeaturedJobs>)
            }


               </div>
            

            </div>
           
            
        </div>
    );
};

export default Homepage;