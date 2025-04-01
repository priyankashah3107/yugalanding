import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const HerpPage = () => {
  return (
    <section className="flex flex-col justify-start items-center gap-8">
      <h1 className=" text-4xl font-normal font-['Alata'] leading-10 self-stretch text-center justify-start text-white md:text-7xl md:leading-[84px] mt-10 md:mt-32 relative ">
        The World's First <br className="md:hidden" /> Yogasana <br />{" "}
        Championship{" "}
        <span className="relative inline-block">
          Software
          <Image
            src={"/underline.png"}
            alt="underline"
            width={400}
            height={50}
            className="absolute left-0 bottom-[-10px] w-96 h-7 hidden md:block"
          />
        </span>
      </h1>
      <p className="self-stretch text-center justify-start   font-medium font-['Rethink_Sans'] leading-none -mt-2 text-white text-xl  md:hidden">
        Experience the future of competition <br /> management with Yogasana
        Bharat
      </p>
      <p className="w-[770px] text-center justify-start text-white text-xl font-medium font-['Rethink_Sans'] leading-loose hidden md:block">
        Experience the future of competition management with Yogasana Bharat—a
        cutting-edge platform designed to streamline every aspect of your
        championship.
      </p>
      <Button className="bg-white text-black hover:bg-white rounded-full cursor-pointer ">
        Get start for free
      </Button>

      {/* <Image src={"/hero.png"} alt="hero" height={"100"} width={"100"} /> */}
      {/* <Image
        src={"/hero.png"}
        alt="hero"
        height={"2000"}
        width={"2000"}
        className="w-full md:h-[859px] rounded-[29px] mt-12  object-cover "
      /> */}
    </section>
  );
};

export default HerpPage;
