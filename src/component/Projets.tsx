import ProjectCard from "./ProjectCard";
import { projectData } from "../DATA";
const Projets = () => {
  return (
    <section className="h-screen p-5 flex flex-col justify-center items-center gap-20">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-4xl font-semibold tracking-wide">Projets</h3>
        <div className="h-1 w-14 mt-4 bg-warning rounded-full"></div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        {projectData.map((item) => {
          return <ProjectCard {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Projets;
