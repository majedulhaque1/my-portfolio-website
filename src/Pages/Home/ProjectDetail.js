import React from 'react';
import image from '../../Assets/wellmedicare.png';

const ProjectDetail = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex justify-between'>
                <div className='w-2/4'>
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                    <img src={image} alt="" />
                </div>
                <article className='w-2/4'>
                    <h2>Well Madicare - Dentel service website.</h2>
                    <p>
                        <ol>
                            <li>Design and develop professional dentel service website with firebase authentication</li>
                            <li>Implement Firebase authentication like login ,resiter, google sign in, etc</li>
                        </ol>
                    </p>
                    <h2>Front end technology</h2>
                    <p>
                        
                    </p>
                </article>
            </div>
        </div>
    );
};

export default ProjectDetail;