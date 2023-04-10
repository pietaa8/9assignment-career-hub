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
            <h1>Job Category List</h1>
            <p>Exploring thousands of job opportunities with all the infromation I need.Its my future.</p>
                {
                  categories.map(category =><JobCategories
                    key={category.id}
                    category={category}>
                        
                    </JobCategories>)
                }
            

            </div>
           
            
        </div>
    );
};

export default Homepage;