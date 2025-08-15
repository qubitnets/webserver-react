// AboutScroll.jsx
import React from "react";

export default function AboutScroll() {
  const logos = [
    {
      src: "https://www.visionet.com/sites/default/files/2024-05/alliances-amazon%20%281%29.webp",
      alt: "Magento Professional Solutions Partner logo with orange and gray text and design",
      width: "w-50",
    },
    {
      src: "https://www.visionet.com/sites/default/files/2024-05/alliances-magento%20%281%29.webp",
      alt: "Salesforce silver consulting partner logo with blue cloud and gray text",
      width: "w-50",
    },
    {
      src: "https://www.visionet.com/sites/default/files/2024-05/alliances-salesforce%20%281%29.webp",
      alt: "Amazon Web Services Partner Network logo with orange cubes and black text, advanced technology partner",
      width: "w-50",
    },
    {
      src: "https://www.visionet.com/sites/default/files/2024-05/alliances-microsoft-partners%20%281%29.webp",
      alt: "Amazon Web Services Partner Network logo with orange cubes and black text, advanced technology partner",
      width: "w-50",
    },
    {
      src: "https://www.visionet.com/sites/default/files/2024-05/alliances-cloud-partner_0%20%281%29_0.webp",
      alt: "Amazon Web Services Partner Network logo with orange cubes and black text, advanced technology partner",
      width: "w-20",
    },
    {
      src: "https://www.visionet.com/sites/default/files/2024-05/alliances-adobe%20%281%29.webp",
      alt: "Microsoft Partner logo with Microsoft colored squares icon and black text, awarded 2022 Partner of the Year",
      width: "w-50",
    },
  ];

  return (
    <section className="max-w-8xl mx-auto mt-20">
      <div className="px-4 py-8 text-center">
        <h1 className="text-4xl font-bold leading-tight mb-12">
          <span className="text-orange-600 font-bold text-3xl mb-10 block">
            OUR ALLIANCES
          </span>
          The best global partners on a common mission
        </h1>
      </div>

      {/* Scroller */}
      <div className="overflow-hidden">
        <div className="flex animate-scroll space-x-16">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className={`${logo.width} flex-shrink-0`}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full h-auto block mx-auto"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
