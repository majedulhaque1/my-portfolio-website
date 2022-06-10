import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "react-tsparticles";

import image from '../../Assets/rakib.jpg';

const Banner = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse">
    <div>
      <img src={image} className="max-w-sm w-96 h-96 mx-16 rounded-full mb-2 shadow-blue-400 shadow-2xl" />
      <div style={{borderRadius: '100%',boxShadow: '0px 34px 50px blue'}} className='w-80 h-12 opacity-75 mt-8 mx-auto bg-blue-600 shadow-2xl shadow-blue-600 rounded-full'></div>
    </div>
    <div>
      <h1 className="text-5xl font-bold">
          <p className='text-white xs:text-xl mb-1 lg:text-2xl'>I am <span className='text-blue-600 tracking-widest'>Majedul Haque Rakib</span> </p><br />
          <span className='text-white xs:text-xl lg:text-6xl'>I am Junior Web Developer</span>
          </h1>
      <p className="py-6 text-white">I build profesional Website using React Js</p>
      <a className="btn btn-info" target='_blank' href='https://drive.google.com/file/d/1XsaiLc1vneOaZwtRq2Rf2p-n_NDjnmTr/view?usp=sharing'>Download Resume</a>
    </div>
  </div>
  <Particles id='tsParticles' init={particlesInit} loaded={particlesLoaded}></Particles>
</div>
    );
};

export default Banner;