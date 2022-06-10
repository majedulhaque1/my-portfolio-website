import React from 'react';
import image1 from '../../Assets/wellmedicare.png';
import image2 from '../../Assets/cardelar.png';
import image3 from '../../Assets/manufacturer.png';

const Projects = () => {
    return (
        <>
        <div className='my-24'>
            <h2 className='text-4xl text-blue-600 text-center'>MY PROJECTS</h2>
        </div>
        <div className='w-4/5 mx-auto flex justify-between items-center flex-wrap'>
            <div class="m-5 md:m-5 card w-96 bg-base-100 shadow-xl">
  <figure><img src={image1} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Well Madicare - Dental service</h2>
    <div class="card-actions justify-end">
      <a href='https://creative-semifreddo-a8b143.netlify.app/' target='_blank' class="btn btn-primary">Demo</a>
    </div>
  </div>
</div>
<div class="m-5 md:m-5 card w-96 bg-base-100 shadow-xl">
  <figure><img src={image2} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">carDeler - Inventory management website</h2>
    <div class="card-actions justify-end">
      <a href='https://warehouse-management-web-be2f4.web.app/' target='_blank' class="btn btn-primary">Demo</a>
    </div>
  </div>
</div>
<div class="m-5 md:m-5 card w-96 bg-base-100 shadow-xl">
  <figure><img src={image3} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Manufacturer website</h2>
    <div class="card-actions justify-end">
      <a href='https://manufacturer-website-f037d.web.app/' target='_blank' class="btn btn-primary">Demo</a>
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default Projects;