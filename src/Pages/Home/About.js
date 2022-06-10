import React from 'react';
import image from '../../Assets/rakib.jpg';

const About = () => {
    return (
        <div className='w-4/5 mx-auto flex justify-evenly flex-wrap'>
            <div className='w-96 m-5'>
                <h2 className='text-blue-600 text-6xl uppercase'>About Me</h2>
                <p className='text-blue-200 mt-16 text-start'>I am passionate about programming.I am a junior web developer.Now i work react js.I can build user friendly website.My interenst in new technology like blockchain.
                </p>
            </div>
            <div className='bg-blue-600 w-80'>

            <img className='w-80 h-80 mt-3 ml-3' src={image} alt="About me img" />
            </div>
        </div>
    );
};

export default About;