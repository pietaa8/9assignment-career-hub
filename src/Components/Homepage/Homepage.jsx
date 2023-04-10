import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategories from '../JobCategories/JobCategories';

const Homepage = () => {
    const [categories,setCategories]=useState([])

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
            

            </div>
           
            
        </div>
    );
};

export default Homepage;