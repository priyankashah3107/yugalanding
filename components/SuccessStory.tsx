import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Dot, Trophy } from "lucide-react";

const SuccessStory = () => {
  return (
    <>
      <div className="flex flex-row gap-1 items-center justify-center  text-center md:hidden">
        <Button className="bg-neutral-100 hover:bg-neutral-100 text-black border-2 border-[#F6F6F6] rounded-full ">
          <Trophy />
          Success Story
        </Button>
      </div>
      <div className="flex  md:flex md:flex-row  md:justify-between md:relative  md:px-10 md:items-center md:text-center ">
        <div className="relative top-72 z-10 md:top-0 md:z-0">
          <Image
            src={"/luser1.png"}
            alt="user"
            width={"1000"}
            height={"1000"}
            className="w-8 h-7 md:w-24 md:h-24 rounded-full relative left-10 md:left-32 md:-top-6"
          />
          <Image
            src={"/luser2.png"}
            alt="user"
            width={"1000"}
            height={"1000"}
            className="w-5 h-5 md:w-16 md:h-16 rounded-full"
          />
          <Image
            src={"/luser3.png"}
            alt="user"
            width={"1000"}
            height={"1000"}
            className="w-9 h-9  md:w-28  md:h-28 rounded-full relative left-16 md:left-20"
          />
          <Image
            src={"/luser4.png"}
            alt="user"
            width={"1000"}
            height={"1000"}
            className="w-7 h-7 md:w-24 md:h-24 rounded-ful"
          />
        </div>
        <div>
          {/* <Image
            src={"/path.png"}
            alt="path"
            width={"1000"}
            height={"1000"}
            className="w-[453.98px] h-[1092.50px] relative"
          /> */}
          <div className="flex flex-col justify-center items-center">
            <h1 className=" w-80 text-center justify-start text-stone-900 text-3xl font-normal font-['Alata'] leading-loose md:w-[620px] t  md:text-5xl md:font-medium md:leading-[62px]">
              <span className="relative inline-block ">
                Championship
                <Image
                  src={"/underline.png"}
                  alt="underline"
                  width={400}
                  height={50}
                  className="absolute left-0  bottom-[-20px] w-72 h-7  "
                />
              </span>{" "}
              Excellence, <br className="hidden md:block" /> Proven by{" "}
              <span className="bg-[#E3EBFF] w-[200px] px-4 h-16  rounded-[100px]">
                Numbers
              </span>
            </h1>

            <div className="w-60 h-60  rounded-2xl flex flex-col items-center mx-auto md:w-[759px] md:h-56 bg-indigo-100 md:rounded-[30px] mt-12 text-center relative">
              {/* Up Image (Left Side) */}
              <Image
                src={"/up.png"}
                alt="up"
                width={1000}
                height={1000}
                className="w-3 h-5 md:w-6 md:h-9 absolute  top-8 right-44 md:left-24"
              />

              {/* Text Content (Centered) */}
              <p className="w-40 text-center justify-start text-black text-sm font-medium font-['Rethink_Sans'] leading-snug md:w-[594px]  md:text-lg md:font-normal md:leading-9 mt-10">
                Join the platform that is transforming competition
                management—over 250 championships organized, 3000+ athletes
                empowered, and 100,000+ events logged. Experience the future of
                Yogasana excellence today. Join now
              </p>

              {/* Down Image (Right Side) */}
              <Image
                src={"/down.png"}
                alt="down"
                width={1000}
                height={1000}
                className="w-3 h-5 md:w-6 md:h-9 absolute bottom-5 md:bottom-16 left-48 md:left-96 md:ml-60 md:right-28"
              />
            </div>
          </div>
        </div>
        <div className="relative top-72 z-10 md:top-0 md:z-0">
          <Image
            src={"/ruser.png"}
            alt="user"
            width={"1000"}
            height={"1000"}
            className="w-6 h-6 md:w-16 md:h-16 rounded-full relative right-8 md:right-44"
          />
          <Image
            src={"/ruser2.png"}
            alt="user"
            width={"1000"}
            height={"1000"}
            className="w-6 h-6 md:w-28 md:h-28 rounded-full relative bottom-24 md:bottom-32"
          />
          <Image
            src={"/luser3.png"}
            alt="user"
            width={"1000"}
            height={"1000"}
            className="w-7 h-7 md:w-20 md:h-20 rounded-full relative md:bottom-11 right-10 md:right-32"
          />
          <Image
            src={"/ruser3.png"}
            alt="user"
            width={"1000"}
            height={"1000"}
            className="w-16 h-16 md:w-44 md:h-44 rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between relative px-4 md:px-20 overflow-hidden ">
        {/* Left column with two stacked divs */}
        <div className="flex flex-col md:gap-16  w-64 md:w-1/3 md:z-10">
          {/* First left div */}
          <div className="mt-2 md:mt-36 flex flex-col md:gap-2 relative  left-20 md:left-0 ">
            <h1 className="w-64  md:w-[600px] justify-start  text-2xl   leading-loose md:text-5xl text-gray-950 font-normal font-['Alata'] md:leading-[62px] -mb-6 md:-mb-0">
              250+{" "}
              <span className="relative inline-block">
                Championship
                <Image
                  src={"/underline.png"}
                  alt="underline"
                  width={400}
                  height={50}
                  className="absolute left-0  md:bottom-[-20px] md:w-72 md:h-7 "
                />
              </span>{" "}
              Organized
            </h1>
            <p className="w-64 md:w-[600px] justify-start text-neutral-500 text-sm font-normal font-['Rethink_Sans'] leading-none  md:text-lg  md:leading-7 mt-6 max-w-md mb-8 md:mb-0">
              Our platform powers over 250 successful championships, delivering
              seamless event management and top-tier competition experiences.
            </p>
          </div>

          {/* Second left div */}
          <div className="flex flex-col gap-2 relative right-16 md:mt-60">
            <h1 className="w-64 -mb-6 mb:-mb-0 md:w-[600px] justify-start  text-2xl   leading-loose md:text-5xl text-gray-950 font-normal font-['Alata'] md:leading-[62px]">
              <span className="relative inline-block">
                1000+
                <Image
                  src={"/underline.png"}
                  alt="underline"
                  width={400}
                  height={50}
                  className="absolute left-0 bottom-[-20px] mb-6 md:mb-0 w-32 md:w-72 md:h-7 "
                />
              </span>
              Events Logged
            </h1>
            <p className="w-64  md:w-[600px] justify-start text-neutral-500 text-sm font-normal font-['Rethink_Sans'] leading-none  md:text-lg  md:leading-7 mt-6 max-w-md">
              ver 3,000 athletes trust our system to manage and celebrate their
              achievements. Be part of a community that is redefining excellence
              and driving competitive spirit!
            </p>
          </div>
        </div>

        {/* Center path image */}
        <div className="absolute -top-8 -left-20  md:left-1/2 md:transform md:-translate-x-1/2 h-full flex items-start  md:items-center md:justify-center">
          <Image
            src={"/path.png"}
            alt="path"
            width={500}
            height={1000}
            className="h-[1200] md:h-[1092px] object-contain"
          />
        </div>

        {/* Right column with one div */}
        <div className="flex flex-col w-full md:w-1/3 z-10 mt-16 md:mt-36">
          <div className="flex flex-col md:gap-2 md:-ml-32 relative -right-32 md:-right-0">
            <h1 className="w-64  md:w-[600px] justify-start  text-2xl  md:text-5xl text-gray-950 font-normal font-['Alata'] md:leading-[62px] leading-tight">
              3000+ Athletes{" "}
              <span className="relative inline-block">
                Empowered
                <Image
                  src={"/underline.png"}
                  alt="underline"
                  width={400}
                  height={50}
                  className="absolute left-0 bottom-[-20px] md:w-72 md:h-7"
                />
              </span>
            </h1>
            <p className="w-64  md:w-[600px] justify-start text-neutral-500 text-sm font-normal font-['Rethink_Sans'] leading-none  md:text-lg  md:leading-7 mt-6 max-w-md">
              Over 3,000 athletes trust our system to manage and celebrate their
              achievements. Be part of a community that is redefining excellence
              and driving competitive spirit!
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 w-full  ">
        <Button className="bg-[#2563eb] hover:bg-[#2563eb] text-white rounded-full cursor-pointer">
          Sign up for free
        </Button>
      </div>
    </>
  );
};

export default SuccessStory;

// import Image from "next/image";
// import React from "react";
// import { Button } from "./ui/button";

// const SuccessStory = () => {
//   return (
//     <>
//       <div className="flex flex-col md:flex md:flex-row md:justify-between md:relative md:px-10 md:items-center md:text-center">
//         <div className="order-3 md:order-1 relative mt-6 md:mt-0 md:top-0 md:z-0">
//           <Image
//             src={"/luser1.png"}
//             alt="user"
//             width={"1000"}
//             height={"1000"}
//             className="w-8 h-7 md:w-24 md:h-24 rounded-full relative left-10 md:left-32 md:-top-6"
//           />
//           <Image
//             src={"/luser2.png"}
//             alt="user"
//             width={"1000"}
//             height={"1000"}
//             className="w-5 h-5 md:w-16 md:h-16 rounded-full"
//           />
//           <Image
//             src={"/luser3.png"}
//             alt="user"
//             width={"1000"}
//             height={"1000"}
//             className="w-9 h-9 md:w-28 md:h-28 rounded-full relative left-16 md:left-20"
//           />
//           <Image
//             src={"/luser4.png"}
//             alt="user"
//             width={"1000"}
//             height={"1000"}
//             className="w-7 h-7 md:w-24 md:h-24 rounded-ful"
//           />
//         </div>
//         <div className="order-1 md:order-2">
//           <div className="flex flex-col justify-center items-center">
//             <h1 className="w-80 text-center justify-start text-stone-900 text-3xl font-normal font-['Alata'] leading-loose md:w-[620px] md:text-5xl md:font-medium md:leading-[62px]">
//               <span className="relative inline-block">
//                 Championship
//                 <Image
//                   src={"/underline.png"}
//                   alt="underline"
//                   width={400}
//                   height={50}
//                   className="absolute left-0 bottom-[-20px] w-72 h-7"
//                 />
//               </span>{" "}
//               Excellence, <br className="hidden md:block" /> Proven by{" "}
//               <span className="bg-[#E3EBFF] w-[200px] px-4 h-16 rounded-[100px]">
//                 Numbers
//               </span>
//             </h1>

//             <div className="w-60 h-60 rounded-2xl flex flex-col items-center mx-auto md:w-[759px] md:h-56 bg-indigo-100 md:rounded-[30px] mt-12 text-center relative">
//               <Image
//                 src={"/up.png"}
//                 alt="up"
//                 width={1000}
//                 height={1000}
//                 className="w-3 h-5 md:w-6 md:h-9 absolute top-8 right-44 md:left-24"
//               />

//               <p className="w-40 text-center justify-start text-black text-sm font-medium font-['Rethink_Sans'] leading-snug md:w-[594px] md:text-lg md:font-normal md:leading-9 mt-10">
//                 Join the platform that is transforming competition
//                 management—over 250 championships organized, 3000+ athletes
//                 empowered, and 100,000+ events logged. Experience the future of
//                 Yogasana excellence today. Join now
//               </p>

//               <Image
//                 src={"/down.png"}
//                 alt="down"
//                 width={1000}
//                 height={1000}
//                 className="w-3 h-5 md:w-6 md:h-9 absolute bottom-5 md:bottom-16 left-48 md:right-28"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="order-2 md:order-3 relative mt-6 md:mt-0 md:top-0 md:z-0">
//           <Image
//             src={"/ruser.png"}
//             alt="user"
//             width={"1000"}
//             height={"1000"}
//             className="w-6 h-6 md:w-16 md:h-16 rounded-full relative right-8 md:right-44"
//           />
//           <Image
//             src={"/ruser2.png"}
//             alt="user"
//             width={"1000"}
//             height={"1000"}
//             className="w-6 h-6 md:w-28 md:h-28 rounded-full relative bottom-24 md:bottom-32"
//           />
//           <Image
//             src={"/luser3.png"}
//             alt="user"
//             width={"1000"}
//             height={"1000"}
//             className="w-7 h-7 md:w-20 md:h-20 rounded-full relative md:bottom-11 right-10 md:right-32"
//           />
//           <Image
//             src={"/ruser3.png"}
//             alt="user"
//             width={"1000"}
//             height={"1000"}
//             className="w-16 h-16 md:w-44 md:h-44 rounded-full"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center justify-between relative px-4 md:px-20 overflow-hidden mt-24 md:mt-0">
//         {/* Center path image for mobile and desktop */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex items-center justify-center z-0">
//           <Image
//             src={"/path.png"}
//             alt="path"
//             width={500}
//             height={1000}
//             className="h-[800px] md:h-[1092px] object-contain"
//           />
//         </div>

//         {/* Right column in mobile, left column in desktop */}
//         <div className="flex flex-col gap-16 w-full md:w-1/3 z-10 order-1 md:order-1 mt-16">
//           {/* First div */}
//           <div className="mt-16 md:mt-36 flex flex-col gap-2">
//             <h1 className="w-64 justify-start text-2xl leading-loose md:text-5xl text-gray-950 font-normal font-['Alata'] md:leading-[62px]">
//               250+{" "}
//               <span className="relative inline-block">
//                 Championship
//                 <Image
//                   src={"/underline.png"}
//                   alt="underline"
//                   width={400}
//                   height={50}
//                   className="absolute left-0 bottom-[-20px] w-72 h-7"
//                 />
//               </span>{" "}
//               Organized
//             </h1>
//             <p className="text-neutral-500 text-lg font-normal font-['Rethink_Sans'] leading-7 max-w-md">
//               Our platform powers over 250 successful championships, delivering
//               seamless event management and top-tier competition experiences.
//             </p>
//           </div>

//           {/* Second div */}
//           <div className="flex flex-col gap-2 md:mt-60">
//             <h1 className="w-64 justify-start text-2xl leading-loose md:text-5xl text-gray-950 font-normal font-['Alata'] md:leading-[62px]">
//               <span className="relative inline-block">
//                 1000+
//                 <Image
//                   src={"/underline.png"}
//                   alt="underline"
//                   width={400}
//                   height={50}
//                   className="absolute left-0 bottom-[-20px] w-72 h-7"
//                 />
//               </span>
//               Events Logged
//             </h1>
//             <p className="text-neutral-500 text-lg font-normal font-['Rethink_Sans'] leading-7 mt-6 max-w-md">
//               Over 3,000 athletes trust our system to manage and celebrate their
//               achievements. Be part of a community that is redefining excellence
//               and driving competitive spirit!
//             </p>
//           </div>
//         </div>

//         {/* Left column in mobile, right column in desktop */}
//         <div className="flex flex-col w-full md:w-1/3 z-10 order-3 md:order-3 mt-16 md:mt-36">
//           <div className="flex flex-col gap-2">
//             <h1 className="w-64 justify-start text-2xl leading-loose md:text-5xl text-gray-950 font-normal font-['Alata'] md:leading-[62px]">
//               3000+ Athletes{" "}
//               <span className="relative inline-block">
//                 Empowered
//                 <Image
//                   src={"/underline.png"}
//                   alt="underline"
//                   width={400}
//                   height={50}
//                   className="absolute left-0 bottom-[-20px] w-72 h-7"
//                 />
//               </span>
//             </h1>
//             <p className=" text-neutral-500 text-lg font-normal font-['Rethink_Sans'] leading-7 mt-6 max-w-md">
//               Over 3,000 athletes trust our system to manage and celebrate their
//               achievements. Be part of a community that is redefining excellence
//               and driving competitive spirit!
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center items-center mt-10 w-full">
//         <Button className="bg-[#2563eb] hover:bg-[#2563eb] text-white rounded-full cursor-pointer">
//           Sign up for free
//         </Button>
//       </div>
//     </>
//   );
// };

// export default SuccessStory;
