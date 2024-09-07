type projectCartType = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};
const ProjectCard = ({
  title,
  description,
  image,
  reverse,
}: projectCartType) => {
  return (
    <div
      className={`flex ${
        reverse && "flex-row-reverse"
      } gap-4 bg-neutral-content p-4 rounded-box`}
    >
      <img
        className="w-[400px] rounded-box object-cover"
        src={image}
        alt="image card"
      />
      <div className="p-10 grid gap-4">
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="text-neutral-400 leading-7">{description}</p>
        <div className="flex justify-center">
          <button className="btn btn-neutral btn-outline btn-wide rounded-full">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
