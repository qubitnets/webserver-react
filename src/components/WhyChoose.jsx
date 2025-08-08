import React from "react";
import { FaCheckCircle, FaBrain, FaRocket, FaLock, FaChartBar } from "react-icons/fa";

const features = [
  {
    title: "Full-Stack Expertise",
    icon: <FaBrain className="text-blue-600 text-3xl" />,
    description:
      "From data engineering to AI-powered decision systems, we cover the full data lifecycle with deep technical know-how, ensuring seamless integration, high performance, and scalable solutions tailored to your business needs.",
  },
  {
    title: "Industry-Proven Impact",
    icon: <FaChartBar className="text-blue-600 text-3xl" />,
    description:
      "Our solutions have consistently reduced costs, enhanced operational efficiency, and delivered measurable ROI across diverse sectors—backed by real-world case studies and long-term client partnerships.",
  },
  {
    title: "Scalable & Future-Proof",
    icon: <FaRocket className="text-blue-600 text-3xl" />,
    description:
      "Leveraging cloud-native and modular architectures, we build solutions ready to grow with your evolving business and technology landscape, ensuring sustained value, flexibility, and competitive advantage.",
  },
  {
    title: "Secure & Compliant",
    icon: <FaLock className="text-blue-600 text-3xl" />,
    description:
      "Adhering rigorously to industry best practices in data governance, security standards, and regulatory compliance, we safeguard your data and operations—providing peace of mind for you and your stakeholders.",
  },
];


const WhyChoose = () => {
  return (
    <section className="py-20 bg-gray-50" id="why-choose">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <div className="flex items-start space-x-4">
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
