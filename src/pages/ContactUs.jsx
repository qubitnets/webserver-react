import { useState } from "react";
import { CircularProgress } from "@heroui/react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
function ContactUs() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const details = [
    {
      text: "Email:",
      subText: " support@qubitnets.com",
      logo: assets.email,
    },
    {
      text: "Office Address:",
      subText: "QubitNets Technology West Delhi, New Delhi 110018",
      logo: assets.address,
    },
  ];

  const inputClass = (field) =>
    `w-full rounded-md border bg-white py-3 px-4 text-base font-medium placeholder:font-normal outline-none focus:border-[#fa9c07] focus:shadow-md ${
      errors[field]
        ? "border-red-500 border-opacity-100"
        : "border-[#e0e0e0] placeholder-gray-500"
    }`;

  const validate = () => {
    const newErrors = {};
    if (!userName.trim()) newErrors.userName = "This field is required.";
    if (!email.trim()) newErrors.email = "This field is required.";
    if (!phone.trim()) newErrors.phone = "This field is required.";
    if (!company.trim()) newErrors.company = "This field is required.";
    if (!postalcode.trim()) newErrors.postalcode = "This field is required.";
    if (!country.trim()) newErrors.country = "This field is required.";
    if (!message.trim()) newErrors.message = "This field is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    const data = {
      userName,
      email,
      phone,
      company,
      postalcode,
      message,
    };

    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      setSaveSuccess(true); // Show response section

      if (response.ok) {
        setResponseMessage(
          result.message || "Your message was sent successfully."
        );
        setUserName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setPostalcode("");
        setCountry("");
        setMessage("");
      } else {
        setResponseMessage(
          result.message || "Something went wrong. Please try again later."
        );
      }
    } catch (error) {
      setSaveSuccess(true);
      setResponseMessage("Network error. Please try again later.");
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSaveSuccess(false);
        setResponseMessage("");
      }, 5000);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#f7f7f7] min-h-[500px]">
      {/* Left Section */}
      <div className="order-1 flex flex-col items-start justify-start gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#3D405B]">
          Get In Touch
        </h1>
        <h3 className="text-base md:text-lg text-[#3D405B]">
          For customer support and query, get in touch with us.
        </h3>

        {details.map((detail, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-6 sm:gap-8 mt-1 text-[#3D405B]"
          >
            <div className="aspect-square h-12 sm:h-14 md:h-16 bg-white rounded-full p-2 flex items-center justify-center">
              <img src={detail.logo} alt="" className="h-full object-contain" />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-lg md:text-xl font-semibold">
                {detail.text}
              </h2>
              <p className="text-sm md:text-base">{detail.subText}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section (Form) */}
      {!saveSuccess && (
        <div className="order-2 flex flex-col items-start justify-center gap-4 w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#3D405B]">
            Submit Details
          </h1>
          <h3 className="text-base md:text-lg text-[#3D405B]">
            Fill in your details below & we will get back to you soon!
          </h3>

          <form className="grid grid-cols-1 gap-6 pt-2 w-full">
            {/* Input Fields */}
            <InputField
              label="Full name"
              id="userName"
              value={userName}
              setValue={setUserName}
              error={errors.userName}
              inputClass={inputClass}
              placeholder="jatin"
            />
            <InputField
              label="Email"
              id="email"
              value={email}
              setValue={setEmail}
              error={errors.email}
              inputClass={inputClass}
              placeholder="example@gmail.com"
            />
            <InputField
              label="Phone"
              id="phone"
              value={phone}
              setValue={setPhone}
              error={errors.phone}
              inputClass={inputClass}
              placeholder="+91"
            />
            <InputField
              label="Company/Organization"
              id="company"
              value={company}
              setValue={setCompany}
              error={errors.company}
              inputClass={inputClass}
            />
            <InputField
              label="Postal Code"
              id="postalcode"
              value={postalcode}
              setValue={setPostalcode}
              error={errors.postalcode}
              inputClass={inputClass}
            />

            {/* Country Select */}
            <div className="space-y-2">
              <label className="text-base font-medium text-[#3D405B]/70 before:content-['*'] before:text-[#F14678]">
                Country or Region
              </label>
              <select
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={inputClass("country")}
              >
                <option value="">Select One</option>
                <option value="India">India</option>
                <option value="America">America</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Sri Lanka">Sri Lanka</option>
              </select>
              {errors.country && (
                <p className="pt-2 text-xs text-red-600">{errors.country}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-base font-medium text-[#3D405B]/70 before:content-['*'] before:text-[#F14678]">
                Message (If Any)
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass("message")} resize-none`}
              />
              {errors.message && (
                <p className="pt-2 text-xs text-red-600">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-4 px-4 text-base font-medium tracking-wide text-white capitalize rounded border border-rose-100 bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300 hover:from-rose-300 hover:via-rose-400 hover:to-rose-500 hover:border-rose-400 transition-all duration-150"
            >
              {loading ? (
                <div className="flex justify-center items-center ">
                  <CircularProgress
                    label="Sending Response..."
                    classNames={{
                      indicator: "stroke-white",
                      track: "stroke-white/30",
                    }}
                  />
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      )}

      {/* Success Message Section */}
      {saveSuccess && (
        <div className="order-2 w-full flex flex-col items-center justify-center gap-4 py-4 px-4 text-base tracking-wide rounded-xl border-4 border-[#fa9c07] overflow-hidden">
          <motion.div
            className="aspect-square w-24 sm:w-36"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          >
            <img
              src={assets.cycling}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.span
            className="text-lg sm:text-xl md:text-2xl w-full text-center"
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {responseMessage}
          </motion.span>
        </div>
      )}
    </div>
  );
}

const InputField = ({
  id,
  label,
  value,
  setValue,
  error,
  inputClass,
  placeholder,
}) => (
  <div className="space-y-2">
    <label
      htmlFor={id}
      className="text-base font-medium text-[#3D405B]/70 capitalize before:content-['*'] before:text-[#F14678]"
    >
      {label}
    </label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className={inputClass(id)}
    />
    {error && <div className="pt-2 text-xs text-red-600">{error}</div>}
  </div>
);

export default ContactUs;
