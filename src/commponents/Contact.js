import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { contaactMe, contactMee } from '../assets';
import { ToastContainer, toast } from "react-toastify";


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hsh5r0a', 'template_ryvi4uj', form.current, {
        publicKey: 'pOVTdLh5IZFsyrnwC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sent successfully!!")

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row items-center justify-center">
      <div className="order-2 lg:order-1 lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={contactMee}
          alt="Responsive Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="order-1 lg:order-2 max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="to_name"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />

          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="from_email"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />

          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
          />

          <input
            type="submit"
            value="Send"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer"
          />
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
