import { ArrowBigLeft, ArrowLeft, Handshake } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

interface FeatureItem {
  title: string;
  description: string;
}

const WhyChooseUs: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: "Streamlined Athlete Enrollment",
      description:
        "Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences.",
    },
    {
      title: "Comprehensive Panel Creation",
      description:
        "Easily create and manage panels of technical experts, assign roles and responsibilities to ensure fair and transparent evaluations.",
    },
    {
      title: "Seamless Multi-Level Management",
      description:
        "Efficiently manage competitions at L1, L2, and L3 levels. Our platform integrates administrative tools for competition oversight.",
    },
    {
      title: "Dynamic Event & Result Tracking",
      description:
        "Log and track thousands of events in real time, providing clear insights and analytics to help you monitor progress and celebrate success.",
    },
    {
      title: "Secure and Efficient Workflows",
      description:
        "From tracking enrollments to assigning marks, our software ensures data integrity and a smooth workflow.",
    },
    {
      title: "User-friendly Interface & Dedicated Support",
      description:
        "Our software is designed to adapt to your specific organizational needs, ensuring a smooth experience from setup to execution.",
    },
  ];

  return (
    <>
      {/* <div className="flex flex-row gap-1 items-center justify-center  text-center md:hidden bg-white relative  ">
        <Button className="bg-neutral-100 hover:bg-neutral-100 text-black border-2 border-[#F6F6F6] rounded-full ">
          <Handshake />
          Our Promise
        </Button>
      </div> */}
      <div className="relative w-full overflow-hidden bg-blue-600 text-white">
        {/* Top wave layers - three waves */}
        <div className="absolute top-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full"
          >
            <path
              fill="#FFFFFF"
              d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="absolute top-6 left-0 w-full opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full"
          >
            <path
              fill="#FFFFFF"
              d="M0,32L60,48C120,64,240,96,360,96C480,96,600,64,720,48C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="absolute top-12 left-0 w-full opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full"
          >
            <path
              fill="#FFFFFF"
              d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,53.3C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>

        {/* Bottom wave layers - three waves */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full"
          >
            <path
              fill="#FFFFFF"
              d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-6 left-0 w-full opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full"
          >
            <path
              fill="#FFFFFF"
              d="M0,32L60,48C120,64,240,96,360,96C480,96,600,64,720,48C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-12 left-0 w-full opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full"
          >
            <path
              fill="#FFFFFF"
              d="M0,96L60,85.3C120,75,240,53,360,48C480,43,600,53,720,53.3C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            ></path>
          </svg>
        </div>

        {/* Background circles */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-blue-500 opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full border border-blue-500 opacity-20"></div>
        <div className="absolute top-40 right-10 w-40 h-40 rounded-full border border-blue-500 opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 pt-24 pb-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="relative px-4">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-blue-100 text-sm mb-6">
                  {feature.description}
                </p>

                {/* Horizontal arrows between boxes in the same row */}
                {index % 3 !== 2 && index < features.length - 1 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
                    <Image
                      src={"/line.png"}
                      alt="line"
                      width={"100"}
                      height={"1000"}
                      className="md:w-32  md:ml-72 rotate-90"
                    />
                  </div>
                )}

                {/* Vertical arrows between rows */}
                {index < 6 && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                    <Image
                      src={"/line.png"}
                      alt="line"
                      width={"1000"}
                      height={"100"}
                      className="md:w-96"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
