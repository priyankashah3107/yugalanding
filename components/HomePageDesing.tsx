import Image from "next/image";
import React from "react";

const HomePageDesing = () => {
  return (
    <>
      <Image
        src={"/hero.png"}
        alt="hero"
        height={"2000"}
        width={"2000"}
        className="w-full  mt-12  object-cover "
      />
    </>
  );
};

export default HomePageDesing;
