import React from 'react';


const Contact = () => {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Page</h2>
      </div>

      <div className="container mt-10 mx-auto px-4">
       <form>
       <div className="form-group mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
              <input type="text" id="name" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"/>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input type="email" id="email" placeholder="example@domain.com" className="block text-gray-700 mb-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input type="text" id="subject" placeholder="Enter your subject"  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            </div>
            <div className="form-group mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea id="message" placeholder="Type your message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 h-32 resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >Submit</button>
       </form>
      </div>
    </div>
  );
}

export default Contact;
