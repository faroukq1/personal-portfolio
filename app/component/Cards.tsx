import Image from "next/image";
import project from "../public/project.jpg";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";

import Link from "next/link";

const Cards = () => {
  return (
    <div className="my-8">
      <div className="bg-black border-2 w-fit p-1 rounded-md">
        <Image
          src={project}
          className="w-full h-96 object-cover"
          alt="card picture"
        />
        <div className="border-b mt-4 pb-4 px-2">
          <h1 className="font-bold text-xl">title of project</h1>
          <p className="max-w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            culpa.
          </p>
        </div>
        <div className="flex justify-between items-center p-2">
          <p className="font-tight text-lg tracking-wide">react</p>
          <div className="flex gap-2">
            <Button asChild size="icon">
              <Link href="/">
                <FaGithub />
              </Link>
            </Button>
            <Button asChild size="icon">
              <Link href="/">
                <FaExternalLinkAlt />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
