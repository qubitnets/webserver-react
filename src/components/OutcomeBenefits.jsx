
import React from "react";

const OutcomeBenefits = ({ benefits }) => {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50" id="benefits">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What You Gain from Our Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomeBenefits;
