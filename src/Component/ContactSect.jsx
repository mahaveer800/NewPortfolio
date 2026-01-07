import React from 'react';
import Footer from './Footer';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { API_KEY } from '../../data.js';

const ContactSect = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    const formData = new FormData();
    formData.append('access_key', API_KEY);
    formData.append('name', event.target.name.value);
    formData.append('email', event.target.email.value);
    formData.append('message', event.target.message.value);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (data.success) {
        toast.success('Form Submitted Successfully ✅');
        alert("Form Submitted Successfully ✅")
        event.target.reset();
        setResult('');
      } else {
        toast.error(data.message || 'Something went wrong ❌');
        setResult('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Network error. Try again!');
      setResult('');
    }
  };

  return (
    <div className=' flex flex-col items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
        id="Contact"
      >
        

       <div className='w-full flex items-center justify-center h-[84vh]  gap-6 sm:flex-col md:flex-row '>
        {/* About me */}
      <div className="text-amber-50 w-[30%] h-[60%] text-center rounded-2xl sm:h-auto lg:w-[30%] lg:h-[40%] sm:w-full">
  <h2 className="text-6xl font-bold mb-4 text-fuchsia-800">
    Contact Me
  </h2>
  <p className="text-lg text-emerald-100">
    Let’s connect and talk about your ideas, projects, or opportunities.
    Drop a message and I’ll get back to you soon.
  </p>
</div>

        <form
          onSubmit={onSubmit}
          className="max-w-3xl mx-auto text-white  w-2xl h-[55%]  "
        >
          <div className="flex flex-row gap-2 w-2xl h-fit ">
            <div className=" md:w-1/2 text-left h-30 ">
              Your Name
              <input
                className="w-full border border-b-blue-200 rounded px-8 h-15 py-2"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              Your Email
              <input
                className="w-full border border-gray-300 rounded px-8 h-15 py-2"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="my-4 text-left">
            Message
            <textarea
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button className="bg-purple-600  rounded w-36 h-10 hover:bg-white hover:text-black transition duration-300">
            {result ? result : 'Send Message'}
          </button>
        </form>
        </div>

      </motion.div>

      <Footer />
    </div>
  );
};

export default ContactSect;
