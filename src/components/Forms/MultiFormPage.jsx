import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    interest: "",
    phone: "",
    email: "",
    message: "",
  });
  const [activeButton, setActiveButton] = useState("express");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const baseInputStyles =
    "border-b border-gray-300 p-2 bg-white text-black placeholder-black text-xl sm:text-2xl md:text-3xl focus:outline-none focus:border-black font-['Poor_Story'] capitalize";

  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-8 lg:p-12 font-['Poor_Story']">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-black mb-4 md:mb-0">
            START HERE
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl max-w-xl text-black font-normal capitalize">
            #LiveToExpress is conducting live creative events to help you
            express & experience, Fill in the Form below to share your interests
            and we will contact you!
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveButton("express")}
            className={`px-6 py-2 rounded-full text-lg transition-colors font-normal capitalize ${
              activeButton === "express"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Express It
          </button>
          <button
            onClick={() => setActiveButton("experience")}
            className={`px-6 py-2 rounded-full text-lg transition-colors font-normal capitalize ${
              activeButton === "experience"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            Experience It
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className={baseInputStyles}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className={baseInputStyles}
            />
          </div>

          <select
            name="interest"
            onChange={handleChange}
            className={`w-full ${baseInputStyles}`}
          >
            <option value="">Interest</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="dance">Dance</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className={baseInputStyles}
            />
            <input
              type="email"
              name="email"
              placeholder="EMail"
              onChange={handleChange}
              className={baseInputStyles}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            rows={4}
            className={`w-full ${baseInputStyles}`}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className={`px-6 py-2 bg-black text-white text-base sm:text-lg md:text-xl transition-colors font-normal capitalize`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
