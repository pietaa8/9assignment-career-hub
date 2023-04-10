import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className=' mt-12 p-28'>
            <div className='flex justify-between'>
            <h1 className='text-lg font-extrabold'>My Carrer</h1>
            <div className='text-lg font-semibold'>
                <a className='ml-0.5' href="">Statistics</a>
                <a className='ml-0.5' href="">Applied Jobs</a>
                <a href="">Blogs</a>
            </div>
            <button className='button'>Start Applying</button>
            </div>

           
            
        </div>
    );
};

export default Header;