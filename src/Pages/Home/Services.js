import React from 'react';

const Services = () => {
    return (
        <>
        <div className='my-32'>
            <h2 className='text-blue-600 text-center text-4xl'>SERVICES</h2>
        </div>
        <div className='w-4/5 mx-auto flex justify-between flex-wrap m-5'>
            <div className="m-5 md:m-5 card w-96 bg-base-100 shadow-xl">
                <p className='text-blue-600 p-5 mx-auto'><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg></p>
                <div className="card-body">
                <h2 className="text-center text-2xl">UI/UX</h2>
                <div className="card-actions justify-end">
                <button className="btn btn-primary block mx-auto my-4">Read more</button>
                </div>
                </div>
            </div>
            <div className="m-5 md:m-5 card w-96 bg-base-100 shadow-xl">
                <p className='text-blue-600 p-5 mx-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                </p>
                <div className="card-body">
                <h2 className="text-center text-2xl">Front End Development</h2>
                <div className="card-actions justify-end">
                <button className="btn btn-primary block mx-auto my-4">Read more</button>
                </div>
                </div>
            </div>
            <div className="m-5 md:m-5 card w-96 bg-base-100 shadow-xl">
                <p className='text-blue-600 p-5 mx-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                </p>
                <div className="card-body">
                <h2 className="text-center text-2xl">Branding/Design</h2>
                <div className="card-actions justify-end">
                <button className="btn btn-primary block mx-auto my-4">Read more</button>
                </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Services;