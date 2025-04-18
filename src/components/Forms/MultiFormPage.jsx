import { useState } from "react";
import db from "../../FirebaseConfig/firebase-config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeadingWithUnderline from "../UIElements/HeadingWithUnderline";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    interests: [],
    phone: "",
    email: "",
    message: "",
    selectedType: "",
  });
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, interests, phone, email } = formData;

    if (!firstName || interests.length === 0 || !phone || !email) {
      toast.error(
        "Required fields are missing. Please fill in all the required fields.",
        {
          style: {
            fontFamily: "Poor Story, cursive",
            fontSize: "16px",
            color: "#333",
          },
        }
      );

      return;
    }

    try {
      await db.collection("userResponse").add(formData);
      toast.success("We received your interests! Thank you!", {
        style: {
          fontFamily: "Poor Story, cursive",
          fontSize: "16px",
          color: "#333",
        },
      });

      setFormData({
        firstName: "",
        lastName: "",
        interests: [],
        phone: "",
        email: "",
        message: "",
        selectedType: "",
      });
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };

  const baseInputStyles =
    "border-b border-gray-300 p-2 bg-white text-black placeholder-black text-xl sm:text-2xl md:text-3xl focus:outline-none focus:border-black font-['Poor_Story'] capitalize";

  return (
    <div className="w-full min-h-screen bg-black p-4 md:p-8 lg:p-12 font-['Poor_Story']">
      <ToastContainer />
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <p className="text-2xl sm:text-2xl md:text-3xl text-white font-normal capitalize mb-8 mx-auto text-left max-w-3xl">
          #LiveToExpress is conducting live creative events to help you express
          & experience. Fill in the form below to share your interests and we
          will contact you!
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() =>
              setFormData({ ...formData, selectedType: "Express It" })
            }
            className={`px-6 py-2 rounded-full text-lg transition-colors font-normal capitalize ${
              formData.selectedType === "Express It"
                ? "bg-white text-black"
                : "bg-gray-700 text-white"
            }`}
          >
            Express It
          </button>
          <button
            onClick={() =>
              setFormData({ ...formData, selectedType: "Experience It" })
            }
            className={`px-6 py-2 rounded-full text-lg transition-colors font-normal capitalize ${
              formData.selectedType === "Experience It"
                ? "bg-white text-black"
                : "bg-gray-700 text-white"
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
              value={formData.firstName}
              onChange={handleChange}
              className={`${baseInputStyles} !bg-black text-white placeholder-gray-300 border-t-0 border-r-0 border-l-0 border-b-2 border-white rounded-none focus:!bg-black`}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={`${baseInputStyles} !bg-black text-white placeholder-gray-300 border-t-0 border-r-0 border-l-0 border-b-2 border-white rounded-none focus:!bg-black`}
            />
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className={`w-full text-left !bg-black text-white placeholder-gray-300 border-t-0 border-r-0 border-l-0 border-b-2 border-white rounded-none ${baseInputStyles} focus:!bg-black`}
            >
              {formData.interests.length > 0
                ? formData.interests.join(", ")
                : "Select Interests"}
            </button>
            {showDropdown && (
              <div className="absolute mt-1 w-full !bg-black border border-white shadow-lg rounded-md p-4 z-10">
                {["Art", "Music", "Dance"].map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center space-x-2 mb-2"
                  >
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleCheckboxChange(interest)}
                      className="w-4 h-4 !bg-black text-white border-white rounded focus:ring-white focus:!bg-black"
                    />
                    <span className="text-lg text-white">{interest}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={`${baseInputStyles} !bg-black text-white placeholder-gray-300 border-t-0 border-r-0 border-l-0 border-b-2 border-white rounded-none focus:!bg-black`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`${baseInputStyles} !bg-black text-white placeholder-gray-300 border-t-0 border-r-0 border-l-0 border-b-2 border-white rounded-none focus:!bg-black`}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full ${baseInputStyles} !bg-black text-white placeholder-gray-300 border-t-0 border-r-0 border-l-0 border-b-2 border-white rounded-none focus:!bg-black`}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black text-base sm:text-lg md:text-2xl transition-colors font-normal capitalize hover:bg-gray-200"
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
