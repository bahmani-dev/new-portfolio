import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="px-5  flex flex-col gap-10 ">
      <div className="flex items-center justify-center">
        <Image
          src="/images/Boy/boy.png"
          alt="alt"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <h1>
        Hello I&apos;m <span className="font-bold">Mohammad Bahmani</span>
      </h1>
    </div>
  );
};

export default Hero;
