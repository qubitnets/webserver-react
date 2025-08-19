import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import assets from "../assets/assets"; // adjust path as needed

const ProductSection = ({ product, reverse, id }) => (
  <motion.section
    id={id}
    className={`flex flex-col md:flex-row items-center gap-10 my-16 ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, type: "spring" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Image */}
    <motion.div
      className="md:w-1/2 w-full flex justify-center"
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="rounded-xl shadow-lg w-full max-w-md object-cover"
      />
    </motion.div>

    {/* Text */}
    <motion.div
      className="md:w-1/2 w-full"
      initial={{ x: reverse ? 80 : -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-[#fbb039]">
        {product.title}
      </h2>
      <p className="text-lg mb-5 text-gray-700">{product.description}</p>
      <ul className="mb-2">
        {product.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 mb-2">
            <CheckCircleIcon className="w-6 h-6 text-[#1ecd15] shrink-0 mt-0.5" />
            <span className="text-gray-800">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </motion.section>
);

export default function ProductPage() {
  const products = [
    {
      title: "Ecommerce Branding Platform",
      description:
        "Our ecommerce branding platform is the culmination of 5 years of dedicated experience... We empower businesses to build uniquely branded online stores that connect deeply with their customers.",
      features: [
        "Developed with 5 years of specialized experience in ecommerce technology and brand marketing.",
        "Proprietary customization tools for brand colors, logos, typography, and messaging.",
        "Trusted by businesses seeking to elevate digital presence.",
        "Continuously improved by Qubitnets Technologies team.",
        "Creates a memorable brand experience.",
      ],
      image: assets.ecommerce,
    },
    {
      title: "Interior Design: Qubitnet AI",
      description:
        "Qubitnet revolutionizes interior design with AI technology by offering instant wallpaper application, color customization, object design modification, style transfer, image recommendations, and inpainting.",
      features: [
        "Wallpaper Application: Instant Room Makeovers",
        "Color Customization: Real-Time Visual Experiments",
        "Object Design Modification: Virtually Swap Furniture",
        "Style Transfer: Merge Room Textures Creatively",
        "Image Recommendations: Personalized Design Inspiration",
        "Inpainting: Seamless Object Removal & Repair",
        "Advanced Image Processing with Grounding DINO and SAM models.",
      ],
      image: assets.interiordesign,
    },
    {
      title: "BizAssist Pro",
      description:
        "BizAssist Pro is a cloud-based, no-code business management platform on Bubble.io focused on streamlining operations, enhancing customer relationships, and driving growth.",
      features: [
        "Sales Management System",
        "Customer Database Management",
        "Automated Marketing Campaigns",
        "Smart Chatbot Integration",
        "Customer Feedback Survey System",
        "Reporting and Analytics Dashboard",
      ],
      image: assets.ecommerce, // Use correct image if available
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1); // strip #
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      }
    }
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen px-4 md:px-10 py-10">
      <header className="max-w-4xl mx-auto mb-14 text-center ">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 text-[#f73d5c]">
          Project Showcase
        </h1>
        <p className="text-lg md:text-2xl text-black">
          Discover our modern solutions, powered by the latest in technology and
          design.
        </p>
      </header>
      <div>
        {products.map((product, idx) => (
          <ProductSection
            key={product.title}
            product={product}
            reverse={idx % 2 === 1}
            id={`product-${idx}`}
          />
        ))}
      </div>
    </main>
  );
}
