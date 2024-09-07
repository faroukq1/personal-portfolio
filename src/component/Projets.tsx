import ProjectCard from "./ProjectCard";
import { projectData } from "../DATA";
const Projets = () => {
  return (
    <section className=" p-5">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-4xl font-semibold tracking-wide">Projets</h3>
        <div className="h-1 w-14 mt-4 bg-warning rounded-full"></div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        {projectData.map((item, index) => {
          return (
            <ProjectCard {...item} key={item.id} reverse={index % 2 == 0} />
          );
        })}
      </div>
    </section>
  );
};

export default Projets;
