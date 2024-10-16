import React from "react";
import next from "../public/Technologies/next.png";
import react from "../public/Technologies/reacat.svg";
import tailwind from "../public/Technologies/tailwind.png";
import typescript from "../public/Technologies/typescript.svg";
import Image from "next/image";
const technologiesList = [
  {
    id: 1,
    label: "Next.js",
    image: next,
  },
  {
    id: 2,
    label: "React",
    image: react,
  },
  {
    id: 3,
    label: "Tailwind css",
    image: tailwind,
  },
  {
    id: 4,
    label: "typescript",
    image: typescript,
  },
];
const Technologies = () => {
  return (
    <div className="min-h-[40vh] mt-16 flex flex-col items-center">
      <h1 className="text-4xl my-4">Technologies I Specialize In</h1>
      <ul className="w-full mt-8 flex justify-around items-center">
        {technologiesList.map(({ id, label, image }) => {
          return (
            <li
              key={id}
              className="mt-8 flex flex-col items-center justify-between gap-4 h-32"
            >
              <Image src={image} alt={label} height={80} width={80} />
              <p className="text-xl font-bold">{label}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Technologies;
