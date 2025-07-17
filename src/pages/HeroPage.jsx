import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
const boxDataArray = [
  { text: "Data Analytics" },
  { text: "AI Development" },
  { text: "Software Development" },
  { text: "Digital Marketing" },
  { text: "Cloud Services" },
  { text: "No Code Solution" },
  { text: "Web Development" },
  { text: "Automation" },
];
const spiralIndices = [0, 1, 3, 5, 7, 6, 4, 2];
function rotateSpiral(data) {
  const newData = [...data];
  const temp = newData[spiralIndices[spiralIndices.length - 1]];
  for (let i = spiralIndices.length - 1; i > 0; i--) {
    newData[spiralIndices[i]] = newData[spiralIndices[i - 1]];
  }
  newData[spiralIndices[0]] = temp;
  return newData;
}
function HeroPage() {
  const [boxData, setBoxData] = useState(boxDataArray);
  useEffect(() => {
    const interval = setInterval(() => {
      setBoxData((prev) => rotateSpiral(prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" w-full overflow-hidden">
      <div className="h-full w-full flex flex-col items-center justify-center p-2 mt-3.5 xl:mt-0 gap-10 xl:flex-row ">
        <div className="w-full h-full">
          <div className=" w-full h-full flex flex-col items-center justify-center gap-3 md:gap-6  ">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-lg sm:text-4xl xl:text-3xl 2xl:text-4xl text-[#4f4f50]">
                Welcome To
              </h3>
              <h3 className="text-xl sm:text-4xl xl:text-3xl 2xl:text-4xl  text-[#fa9c07]">
                Qubitnets
              </h3>
            </div>
            <h1 className="text-center text-sm sm:text-xl md:text-2xl lg:text-3xl/snug lg:px-4 xl:text-2xl 2xl:text-3xl text-[#444444] font-semibold sm:p-2 ">
              "Empowering the future with intelligent solutions from AI to
              automation, we transform bold ideas into scalable digital
              realities."
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3">
              <Button
                size="md"
                radius="md"
                variant="faded"
                className="text-sm px-3 sm:text-lg sm:py-3 sm:px-4 lg:py-6 lg:text-xl lg:px-6 xl:px-3 xl:text-lg xl:py-3 2xl:px-6 2xl:py-5 2xl:text-xl bg-[#f73d5c]  text-[#ffffff] border-[#f73d5c] data-[hover=true]:!bg-[#ffffff] data-[hover=true]:!text-[#060607] "
              >
                View All Services
              </Button>
              <Button
                size="md"
                radius="md"
                variant="ghost"
                className=" tex-sm px-3 sm:text-lg sm:py-3 sm:px-4 lg:py-6 lg:text-xl lg:px-6 xl:px-3 xl:text-lg xl:py-3 2xl:px-6 2xl:py-5 2xl:text-xl data-[hover=true]:!bg-[#f73d5c] data-[hover=true]:!text-[#ffffff]  border-[#f73d5c]"
              >
                ContactUs
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center ">
          <div className=" aspect-square w-[100%] sm:w-[80%] lg:w-[65%] xl:w-[90%] xl:p-10   p-6  relative flex items-center justify-center left-[40%] xl:left-[45%]">
            {/* Circle */}
            <div className=" h-full border-[20px] border-[#fbb039] rounded-full flex items-center justify-center p-4 z-10">
              <img
                src="/public/large-vecteezy_group-of-young-people-meeting-in-startup-office_12426406_large.jpg"
                alt="img"
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Rotating grid of boxes */}
            <div className="absolute aspect-square flex justify-center z-30 w-full h-full">
              <div className="grid grid-cols-2 justify-items-start items-center gap-x-44 md:gap-x-60">
                {boxData.map((item, index) => (
                  <motion.div
                    key={item.text}
                    layout
                    transition={{ duration: 0.6, type: "spring" }}
                    className={`py-2 px-2 md:py-3  bg-[#ffffff] rounded-xl shadow-lg drop-shadow-xl text-center xl:text-lg md:text-lg lg:text-xl 2xl:text-xl  ${
                      index === 2 || index === 3 || index === 4 || index === 5
                        ? " w-56  text-xs px-2  text-[#000000]  font-semibold relative   sm:w-sm lg:w-lg lg:px-4 xl:px-2 xl:w-md 2xl:w-xl   xl:left-[-10px] lg:left-[0px]"
                        : "  w-36 text-xs text-[#515151] font-medium sm:w-52 lg:w-56 xl:w-52 2xl:w-64  "
                    } ${
                      index % 2 === 0
                        ? "justify-self-end"
                        : "relative left-[0px]"
                    }`}
                  >
                    {item.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
