import ProjectCard from "./ProjectCard";
import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE,
  accessToken: import.meta.env.VITE_ACCESS,
});

const Projets = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "portofolio" })
      .then((response) => {
        setData(response.items as any);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="h-screen p-5 flex flex-col justify-center items-center gap-20 mb-20">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-4xl font-semibold tracking-wide">Projets</h3>
        <div className="h-1 w-14 mt-4 bg-warning rounded-full"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {data.map((item: any) => {
          return <ProjectCard data={item} key={item.sys.id} />;
        })}
      </div>
    </section>
  );
};

export default Projets;
