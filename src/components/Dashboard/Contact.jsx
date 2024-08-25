import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-6 text-center mb-8 bg-gradient-to-r from-[#8d755a] via-[#ae7437] to-[#b67b55]">
      <h2 className="text-3xl font-bold mb-6 text-white ">Feel Free To Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.044629056729!2d67.06455567521544!3d24.964596177861406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340959f743d53%3A0x187dcbe4eb81b078!2sNagan%20Chowrangi%20Flyover%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1724521660111!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <form
      action='https://formspree.io/f/mjkbjydw'
      method='POST'
      className="mt-8 max-w-lg mx-auto">
        <div className="mb-4">
          <input
            type="text"
            name="UserName"
            placeholder="Enter UserName"
            autoComplete="off"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="Email"
            placeholder="Enter Email"
            autoComplete="off"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="Message"
            placeholder="Enter Your Message"
            required
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-lg text-white py-2 px-4  hover:bg-blue-600 hover:w-24"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
