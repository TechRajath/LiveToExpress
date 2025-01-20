import { useState } from "react";
import db from "../../FirebaseConfig/firebase-config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="w-full min-h-screen bg-white p-4 md:p-8 lg:p-12 font-['Poor_Story']">
      <ToastContainer />
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-normal text-black mb-4 md:mb-0">
            START HERE
          </h1>
          <p className="text-2xl sm:text-2xl md:text-3xl max-w-xl text-black font-normal capitalize">
            #LiveToExpress is conducting live creative events to help you
            express & experience. Fill in the form below to share your interests
            and we will contact you!
          </p>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() =>
              setFormData({ ...formData, selectedType: "Express It" })
            }
            className={`px-6 py-2 rounded-full text-lg transition-colors font-normal capitalize ${
              formData.selectedType === "Express It"
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
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
              value={formData.firstName}
              onChange={handleChange}
              className={baseInputStyles}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={baseInputStyles}
            />
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className={`w-full text-left ${baseInputStyles}`}
            >
              {formData.interests.length > 0
                ? formData.interests.join(", ")
                : "Select Interests"}
            </button>
            {showDropdown && (
              <div className="absolute mt-1 w-full bg-white border border-gray-300 shadow-lg rounded-md p-4 z-10">
                {["Art", "Music", "Dance"].map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center space-x-2 mb-2"
                  >
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleCheckboxChange(interest)}
                      className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                    />
                    <span className="text-lg text-black">{interest}</span>
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
              className={baseInputStyles}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={baseInputStyles}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full ${baseInputStyles}`}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white text-base sm:text-lg md:text-2xl transition-colors font-normal capitalize"
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
