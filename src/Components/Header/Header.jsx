import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className=' mt-12 p-28'>
            <div className='flex justify-between'>
            <h1 className='text-lg font-extrabold'>My Carrer</h1>
            <div className='text-lg font-semibold'>
                <a  href="/">Statistics</a>
                <a href="/appliedJobs">AppliedJobs</a>
                <a href="/blogs">Blogs</a>
            </div>
            <button className='button'>StartApplying</button>
            </div>

           
            
        </div>
    );
};

export default Header;