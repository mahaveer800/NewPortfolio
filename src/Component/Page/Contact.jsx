import React from 'react'
import Navbar from '../Navbar'
import ContactSect from '../ContactSect'

const Contact = () => {
  return (
    <>
    <Navbar/>
  
    <ContactSect/>
    </>
  )
}

export default Contact

// import React, { useState } from 'react';
// import ContactForm from '../components/ContactForm';

// function Contact() {
//   const [result, setResult] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // handle form logic here
//     setResult('Message Sent!');
//   };

//   return (
//     <div className="min-h-screen bg-black">
//       <ContactForm onSubmit={handleSubmit} result={result} />
//     </div>
//   );
// }

// export default Contact;
