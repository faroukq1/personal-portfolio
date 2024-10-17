import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import Cards from "./Cards";

const tagsList = [
  "landing page",
  "Social Media",
  "web3",
  "ecommerce",
  "task manager",
  "no framework",
  "react",
  "next js",
  "css",
  "tailwindcss",
  "bootstrap",
];
const Projects = () => {
  return (
    <div>
      <div className="bg-zinc-950 p-10 border-2 rounded-md grid place-items-center">
        <h1 className="text-white text-4xl font-bold">
          The projects I have managed to complete
        </h1>
        <p className="text-white mt-6 text-lg font-light">
          Remember to give the code a star before using it.
        </p>
      </div>

      {/*SEACH SECTION */}
      <div className="my-8 flex items-center justify-between gap-4">
        <div className="relative">
          <span className="absolute top-3 left-2">
            <CiSearch />
          </span>
          <Input
            size={50}
            className="px-8 py-5"
            placeholder="Search project name..."
          />
        </div>
        <Button size="lg">Clear Filters</Button>
      </div>

      {/*TAGS */}
      <div className="flex justify-between gap-2 my-8">
        {tagsList.map((tag, index) => {
          return (
            <Button key={index} variant="outline">
              {tag}
            </Button>
          );
        })}
      </div>

      {/*CARDS */}
      <Cards />
    </div>
  );
};

export default Projects;
