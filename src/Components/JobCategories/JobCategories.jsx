import React from 'react';

const JobCategories = ({category}) => {
    const {logo,name,jobs}=category;
    
    return (
        <div>
          
            <div>
                <img src={logo} alt="" />
                <h3>{name}</h3>
                <p>{jobs}</p>
            
            </div>

            
        </div>
    );
};

export default JobCategories;