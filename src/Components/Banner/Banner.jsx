import React from 'react';
import img1 from '../../assets/assetsof/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div>
             <div className='flex mt-10 p-28'>
                <div>
                    <h1 className='font-extrabold text-7xl'>One Step Closure To My</h1>
                    <h3 className='text-7xl font-extrabold text-blue-700 my-5'>Dream Job</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus magnam et quaerat, ipsam quo fugiat repellat? Ab temporibus ipsum facilis blanditiis eaque iste cumque perspiciatis nisi, accusamus neque iusto, aperiam quo ut. Voluptate est, consectetur dignissimos minus quam laudantium officia velit aperiam impedit culpa, repudiandae officiis aliquid veritatis consequuntur deserunt tempore! Nam, ratione obcaecati? Perspiciatis illum enim odit voluptatibus possimus.</p>
                    <button className='button mt-5'>Get Started</button>

                </div>
                <img className='img' src={img1} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;