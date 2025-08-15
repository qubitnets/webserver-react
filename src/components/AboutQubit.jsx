import { FaBullseye, FaArrowUp, FaMountain, FaUsers } from "react-icons/fa";

const ICON_SIZE = 48; // Slightly smaller for balance

export default function AboutQubit() {
  const cards = [
    {
      title: "Our purpose",
      text: "To empower people and organizations to continually innovate and achieve excellence by engineering technology solutions that drive meaningful change, efficiency, and progress.",
      icon: <FaBullseye size={ICON_SIZE} className="text-purple-500" />,
      colSpan: "lg:col-span-2",
    },
    {
      title: "Our vision",
      text: "To lead the way to a future where our engineering expertise innovatively shapes and simplifies tomorrow, creating sustainable solutions for generations to come.",
      icon: <FaArrowUp size={ICON_SIZE} className="text-green-500" />,
      colSpan: "lg:col-span-2",
    },
    {
      title: "Our mission",
      text: "Harness the synergistic power of engineering and technology to solve complex challenges, enhance lives, and open new possibilities in every industry we serve.",
      icon: <FaMountain size={ICON_SIZE} className="text-blue-500" />,
      colSpan: "lg:col-span-1",
    },
    {
      title: "Who we are",
      text: "We are an engineering company driven by purpose, vision, and values. Embracing innovation, creativity, and collaboration, we deliver solutions that inspire progress and transform industries. Our diverse team of experts works across multiple domains, leveraging cutting-edge tools and forward-thinking strategies to create impactful solutions. At Qubitnet, we believe in continuous learning, shared success, and a future where technology empowers every community we touch.",
      icon: <FaUsers size={ICON_SIZE} className="text-pink-500" />,
      colSpan: "lg:col-span-3",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full px-6 py-10 bg-gray-100 space-y-12">
      {/* Qubitnet Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What is Qubitnet?
        </h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          Qubitnet is a next-generation engineering and technology solutions
          provider focused on quantum-inspired problem solving, AI-driven
          innovation, and scalable infrastructure. Our mission is to empower
          industries by creating transformative digital ecosystems that
          simplify complexity, accelerate decision-making, and unlock new
          opportunities for sustainable growth.
        </p>
      </section>

      {/* Cards Section */}
      <div className="flex justify-center">
        <div className="grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg shadow-sm p-6 flex flex-col space-y-4 ${card.colSpan}`}
            >
              {/* Icon + Title */}
              <div className="flex items-center space-x-3">
                {card.icon}
                <h3 className="text-lg sm:text-xl font-bold">{card.title}</h3>
              </div>
              {/* Text */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
