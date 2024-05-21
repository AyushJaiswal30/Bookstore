import React from 'react'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'


function Contact() {
  return (
    <>
    <div>
        <Navbar/>
    </div>

    <div className='mx-auto scroll-0'>
    <div className="max-w-md mx-auto px-10 py-28 p-20 bg-white rounded-lg">
    <div><h2 className=" mx-auto text-xl font-semibold mb-4">Contact Us</h2></div>
      
      <form>
        <div className="mb-4">
          <label htmlFor="name" className=" text-gray-700 font-bold mb-22">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" placeholder="Email address" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea id="message" name="message" placeholder="Type your message" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
      </div>
      </div>
    </>
  )
}

export default Contact