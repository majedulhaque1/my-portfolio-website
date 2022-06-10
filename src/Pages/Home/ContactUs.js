import React from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const sendMail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_pkltreb','template_kigrzvi',e.target,'v0i9FLAFWKfmkkSZP')
        .then(result => {
            console.log(result.text);
            alert('Message is send');
        }, (error) =>{
            console.log(error.text);
        })
    }
    return (
        <>
        <div className='my-24'>
            <h2 className='text-blue-600 text-4xl text-center'>GET IN TOUCH</h2>
        </div>
        <div className='w-4/5 mx-auto flex justify-evenly flex-wrap'>
            <div className='w-96'>
                <div className='flex justify-start mb-12'>
                    <p className='text-blue-600 px-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    </p>
                    <div>
                        <h2>01xxxxxxxxxx</h2>
                    </div>
                </div>
                <div className='flex justify-start my-12'>
                    <p className='text-blue-600 px-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    </p>
                    <div>
                        <h2>example@email.com</h2>
                    </div>
                </div>
                <div className='flex justify-start mb-12'>
                    <p className='text-blue-600 px-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    </p>
                    <div>
                        <h2>street no, city, country</h2>
                    </div>
                </div>
            </div>
            <div className='w-96'>
                <form onSubmit={sendMail} action="" className=''>
                    <input className='input input-bordered w-full my-2 mx-w-xs border-blue-600' name='name' type="text" placeholder='Your Name' /><br />
                    <input className='input input-bordered w-full my-2 mx-w-xs border-blue-600' name='user_email' type="email" placeholder='Your Email' /><br />
                    <textarea className='input input-bordered w-full my-2 mx-w-xs border-blue-600' placeholder='Text' name="message" id="" cols="20" rows="20"></textarea><br />
                    <input className='btn btn-primary my-5 text-xl' type="submit" value='Send' />
                </form>
            </div>
        </div>
        </>
    );
};

export default ContactUs;