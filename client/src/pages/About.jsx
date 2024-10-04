import { useState } from 'react';
import Footer from "../components/Footer"
export default function About() {
  // State variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission logic, like sending data to a backend server
    console.log('Form submitted:', { name, email, message });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About BuildCrafter's</h1>
      <p className='mb-4 text-slate-700'>BuildCrafter's is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-slate-700'>Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.</p>
      <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>

      {/* Contact Form */}
      <div>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>Contact Us</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-slate-800">Your Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-400 rounded-md px-3 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-slate-800">Your Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-400 rounded-md px-3 py-2 w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-slate-800">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="border border-gray-400 rounded-md px-3 py-2 w-full h-32 resize-none" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
      <Footer />
    </div>
  );
}
