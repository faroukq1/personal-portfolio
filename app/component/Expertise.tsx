import { FaCode } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { IoExtensionPuzzle } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const skills = [
  {
    id: 1,
    text: "Frontend",
    subText: "Next.js, React, TypeScript",
    icon: <FaCode />,
  },
  {
    id: 2,
    text: "Problem-Solving",
    subText: "Innovative solutions to complex challenges",
    icon: <IoExtensionPuzzle />,
  },
  {
    id: 3,
    text: "Collaboration",
    subText: "Effective team player and communicator",
    icon: <FaPeopleGroup />,
  },
  {
    id: 4,
    text: "Continuous Learning",
    subText: "Up-to-date with latest web technologies",
    icon: <MdOutlineCastForEducation />,
  },
  {
    id: 5,
    text: "Versatility",
    subText: "Seamless front-end and back-end development",
    icon: <GiReturnArrow />,
  },
  {
    id: 6,
    text: "Performance",
    subText: "Efficient, scalable web applications",
    icon: <FaChartSimple />,
  },
];

const Expertise = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3 className="font-bold text-blue-700 text-lg">Expertise</h3>
      <h1 className="text-3xl font-bold">Frontend Web Developer</h1>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {skills.map(({ id, text, subText, icon }) => {
          return (
            <div key={id} className="flex items-center gap-6">
              <span className="text-4xl text-blue-700">{icon}</span>
              <div>
                <h1 className="text-xl font-semibold">{text}</h1>
                <p className="font-semibold text-gray-500 mt-2">{subText}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 mt-4 mb-10">
        <Button className="bg-blue-700" size="lg">
          Email me
        </Button>
        <Button variant="ghost" size="lg" className="flex gap-2 items-center">
          Work with me
          <FaArrowRightLong />
        </Button>
      </div>
    </div>
  );
};

export default Expertise;
