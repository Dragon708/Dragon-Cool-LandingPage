import React from "react";

function Formulario() {
  return (
    <div>
      <form className="bg-[#182951]    rounded-lg p-6">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white font-semibold mb-2 ">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 w-full border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white font-semibold mb-2 ">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="service"
            className="block text-white font-semibold mb-2 ">
            Service
          </label>
          <select
            id="service"
            className="px-4 py-2 w-full border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
            required>
            <option value="">-- Select a service --</option>
            <option value="Web Design">Web Design</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Video Production">Video Production</option>
            <option value="Photography">Photography</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white font-semibold mb-2 ">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            className="px-4 py-2 w-full border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none"
            rows="10"
            required></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
          Send
        </button>
      </form>
    </div>
  );
}

export default Formulario;
