const Aboutsection = () => {
  return (
    <>
      {/* Heading Section */}
      <div>
        <h1 className="text-[#fbb039] text-4xl font-bold text-center">
          A legacy of
        </h1>
        <h1 className="text-[#fbb039] text-4xl text-center font-bold">
          engineering excellence
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto flex flex-row justify-center items-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* First Card */}
          <div className="relative w-70 bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer transition duration-500 ease-in-out hover:scale-105">
            <div className="h-30 bg-gradient-to-r from-gray-400 to-gray-300 flex items-center justify-center">
              <svg
                className="w-15 h-15 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 6v6l4 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-4xl text-center font-bold mb-2 text-[#fbb039]">
                27+
              </h3>
              <p className="text-gray-700 mt-4 text-center text-2xl">
                Years of delivering excellence
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="relative w-70 bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer transition duration-500 ease-in-out hover:scale-105">
            <div className="h-30 bg-gradient-to-r from-gray-400 to-gray-300 flex items-center justify-center">
              <svg
                className="w-18 h-18 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 4a2 2 0 012 2v1.5h1.5a2 2 0 012 2v7a2 2 0 01-2 2H11a2 2 0 01-2-2v-7a2 2 0 012-2H13V6a2 2 0 012-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-4xl text-center font-bold mb-2 text-[#fbb039]">
                9,500+
              </h3>
              <p className="text-gray-700 mt-5 text-2xl text-center">
                Employees
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="relative w-70 bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer transition duration-500 ease-in-out hover:scale-105">
            <div className="h-30 bg-gradient-to-r from-gray-400 to-gray-300 flex items-center justify-center">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 19.2857L15.8 21L20 17M16.5 14.4018C16.2052 14.2315 15.8784 14.1098 15.5303 14.0472C15.4548 14.0337 15.3748 14.024 15.2842 14.0171C15.059 14 14.9464 13.9915 14.7961 14.0027C14.6399 14.0143 14.5527 14.0297 14.4019 14.0723C14.2569 14.1132 13.9957 14.2315 13.4732 14.4682C12.7191 14.8098 11.8817 15 11 15C10.1183 15 9.28093 14.8098 8.52682 14.4682C8.00429 14.2315 7.74302 14.1131 7.59797 14.0722C7.4472 14.0297 7.35983 14.0143 7.20361 14.0026C7.05331 13.9914 6.94079 14 6.71575 14.0172C6.6237 14.0242 6.5425 14.0341 6.46558 14.048C5.23442 14.2709 4.27087 15.2344 4.04798 16.4656C4 16.7306 4 17.0485 4 17.6841V19.4C4 19.9601 4 20.2401 4.10899 20.454C4.20487 20.6422 4.35785 20.7951 4.54601 20.891C4.75992 21 5.03995 21 5.6 21H10.5M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-4xl text-center font-bold mb-2 text-[#fbb039]">
                350+
              </h3>
              <p className="text-gray-700 mt-5 text-2xl text-center">
                Satisfied clients
              </p>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="relative w-70 bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer transition duration-500 ease-in-out hover:scale-105">
            <div className="h-30 bg-gradient-to-r from-gray-400 to-gray-300 flex items-center justify-center">
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <path
                  d="M764.6 341.5c0 127.9-221.5 343.7-221.5 343.7S321.7 469.4 321.7 341.5 420.9 110 543.2 110c122.3-0.1 221.4 103.6 221.4 231.5z"
                  fill="#ffffff"
                />
                <path
                  d="M554 282v-16.9c0-2.9-2.4-5.3-5.3-5.3h-51.3c-2.9 0-5.3 2.4-5.3 5.3v27.3c0 9.8-8 17.8-17.8 17.8h-26.4c-2.9 0-5.3 2.4-5.3 5.3v51.3c0 2.9 2.4 5.3 5.3 5.3h15.5c4.7 0 12 3.8 12 8.4l0.9 35.1c0 8.7 2.6 15.7 11.3 15.7h11.1c3.8 0 7.2 1.3 9.9-0.9h37.6c4.4 0 8-3.6 8-8v-33.7c0-9.2 7.5-16.7 16.7-16.7h34.6c2.9 0 5.3-2.4 5.3-5.3v-60c0-6.5-5.2-11.7-11.7-11.7h-31.7c-7.5 0.2-13.4-5.7-13.4-13z"
                  fill="#FFFFFF"
                />
                <path
                  d="M543 439.2h-55.6c-4.2 0-8.2-1.7-11.2-4.7s-4.7-7-4.7-11.2v-35.7c0-2.1-0.8-4.1-2.3-5.6s-3.5-2.3-5.6-2.3h-35.7c-8.8 0-15.9-7.1-15.9-15.9v-55.6c0-4.2 1.7-8.2 4.7-11.2s7-4.7 11.2-4.7h0.7v8h-0.7c-2.1 0-4.1 0.8-5.6 2.3s-2.3 3.5-2.3 5.6v55.6c0 4.4 3.5 7.9 7.9 7.9h35.7c4.3 0 8.2 1.7 11.3 4.7 3 3 4.7 7 4.7 11.3v35.7c0 4.4 3.5 7.9 7.9 7.9h55.6c4.4 0 7.9-3.5 7.9-7.9v-35.7c0-4.3 1.7-8.2 4.7-11.3 3-3 7-4.7 11.3-4.7h35.7c2.1 0 4.1-0.8 5.6-2.3s2.3-3.5 2.3-5.6v-55.6c0-4.4-3.5-7.9-7.9-7.9H567c-8.8 0-15.9-7.1-15.9-15.9v-35.7c0-4.4-3.5-7.9-7.9-7.9h-55.6c-4.4 0-7.9 3.5-7.9 7.9v35.7c0 4.3-1.7 8.2-4.7 11.3-3 3-7 4.7-11.3 4.7h-8.9v-8h8.9c2.1 0 4.1-0.8 5.6-2.3s2.3-3.5 2.3-5.6v-35.7c0-8.8 7.1-15.9 15.9-15.9h55.6c8.8 0 15.9 7.1 15.9 15.9v35.7c0 4.4 3.6 7.9 7.9 7.9h35.7c8.8 0 15.9 7.1 15.9 15.9v55.6c0 4.2-1.7 8.2-4.7 11.2s-7 4.7-11.2 4.7h-35.7c-2.1 0-4.1 0.8-5.6 2.3s-2.3 3.5-2.3 5.6v35.7c-0.1 8.6-7.3 15.8-16 15.8z"
                  fill="#000000"
                />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-4xl text-center font-bold mb-2 text-[#fbb039]">
                14
              </h3>
              <p className="text-gray-700 text-center mb-4 text-2xl">
                Locations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Alliances Section */}
      <section className="max-w-8xl flex flex-wrap mx-auto mt-20">
        <div className="flex max-w-8xl mx-auto px-4 py-8">
          <h1 className="text-4xl text-center sm:text-4xl font-bold leading-tight mb-12">
            <span className="text-[#fbb039] font-bold text-3xl mb-10">
              OUR ALLIANCES
            </span>
            <br /> The best global partners on a common mission
          </h1>
        </div>

        <marquee>
          <div className="flex flex-wrap mt-15 justify-between items-center">
            <div className="w-50 flex-shrink-0">
              <img
                src="https://www.visionet.com/sites/default/files/2024-05/alliances-amazon%20%281%29.webp"
                alt="Amazon logo"
                className="max-w-full h-auto block mx-auto"
              />
            </div>
            <div className="w-50 flex-shrink-0">
              <img
                src="https://www.visionet.com/sites/default/files/2024-05/alliances-magento%20%281%29.webp"
                alt="Magento logo"
                className="max-w-full h-auto block mx-auto"
              />
            </div>
            <div className="w-50 flex-shrink-0">
              <img
                src="https://www.visionet.com/sites/default/files/2024-05/alliances-salesforce%20%281%29.webp"
                alt="Salesforce logo"
                className="max-w-full h-auto block mx-auto"
              />
            </div>
            <div className="w-50 flex-shrink-0">
              <img
                src="https://www.visionet.com/sites/default/files/2024-05/alliances-microsoft-partners%20%281%29.webp"
                alt="Microsoft partner logo"
                className="max-w-full h-auto block mx-auto"
              />
            </div>
            <div className="w-20 flex-shrink-0">
              <img
                src="https://www.visionet.com/sites/default/files/2024-05/alliances-cloud-partner_0%20%281%29_0.webp"
                alt="Cloud Partner logo"
                className="max-w-full h-auto block mx-auto"
              />
            </div>
            <div className="w-50 flex-shrink-0">
              <img
                src="https://www.visionet.com/sites/default/files/2024-05/alliances-adobe%20%281%29.webp"
                alt="Adobe logo"
                className="max-w-full h-auto block mx-auto"
              />
            </div>
          </div>
        </marquee>
      </section>
    </>
  );
};

export default Aboutsection;
