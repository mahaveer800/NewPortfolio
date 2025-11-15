import React from 'react';

function ContactForm({ onSubmit, result }) {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-3xl mx-auto text-white pt-8 px-6 sm:px-8"
    >
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-6 text-center text-purple-400">
        Get in Touch
      </h2>

      {/* Name & Email */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="flex-1">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Your Email
          </label>
          <input
            className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-4 py-3 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          name="message"
          placeholder="Write your message..."
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-purple-600 hover:bg-white hover:text-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          {result ? result : 'Send Message'}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
