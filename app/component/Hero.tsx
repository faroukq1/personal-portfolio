import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import heropic from "../public/heropic.webp";
import Container from "./Container";
const socialMedia = [
  <BiLogoGmail />,
  <FaGithub />,
  <FaLinkedin />,
  <FaSquareWhatsapp />,
];
const Hero = () => {
  return (
    <div className="pt-4 flex min-h-[60vh]">
      {/*ABOUT US */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="font-bold text-4xl leading-10">
          Hello 👋 <br />
          I'am
          <span className="text-blue-700"> Farouk ouledmeriem</span>
        </h1>
        <p className="mt-8 text-xl font-thin">
          A skilled <span className="font-bold">Next.js, React</span> developer
          with over 4 years of experience building robust, scalable, and
          high-performance web applications.
        </p>
        {/*BUTTONS */}
        <div className="flex gap-4 mt-8">
          <Button className="bg-blue-700">View My work</Button>
          <Button className="bg-slate-400">Hire me</Button>
        </div>
        <ul className="flex gap-8 mt-8">
          {socialMedia.map((icon, index) => {
            return (
              <li className="text-4xl" key={index}>
                {icon}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative flex-1 grid place-items-center overflow-hidden ">
        <Image
          src={heropic}
          alt="hero picture"
          className="border-2 absolute h-[80%] w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
