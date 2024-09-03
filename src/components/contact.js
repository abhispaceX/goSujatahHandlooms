import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      'template_exy3gen',
      form.current,
      {
        publicKey: 'iz1sF9K31BOdEyKp5'
      }
    ).then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send the message, please try again.');
    });

    e.target.reset();
  };
 

  return (
    <div className="bg-white text-gray-800 p-6">
      {/* Contact Information */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">GET IN TOUCH</h2>
        <p>Over Courier Adresse.</p>
        <p>Mr. Bikshpati Kolaan.</p>
        <p>M/s. Go Sujathaa Handlooms.</p>
        <p>9-11, Vellanky - 508113.</p>
        <p>Mandal: Ramannapeta.</p>
        <p>Dist: Yadadri Bhuvanagiri.</p>
        <p>Telangana.</p>
        <p>Ph: 9121958018</p>
        <p>DTDC Courier Ramannapeta.</p>
        <p>Email: gosujathaahandlooms@gmail.com</p>
        <p>M/s. Go Sujathaa Handlooms.</p>
        <p>GSTIN: 36BHVPK9670B1ZU</p>
      </div>

      {/* Contact Form */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">CONTACT</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            className="w-full p-2 mt-4 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 mt-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className=' mt-5 flex flex-col justify-center  items-center' >

      <h1 className=' text-black font-montserrat text-xl' >FOLLOW US </h1>
      <a
        href="https://www.instagram.com/go.sujathaa.handlooms?igsh=MTN5cXI3bzlxc3hvZg%3D%3D&utm_source=qr"
       className=' size-10 mt-2'
      >
        <FontAwesomeIcon  icon={faInstagram} className=" text-2xl "  />
      </a>
      </div>
    </div>
  );
};

export default Contact;
