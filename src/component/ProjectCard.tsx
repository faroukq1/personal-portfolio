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
      className={`relative flex ${
        reverse && "flex-row-reverse"
      } gap-4 bg-neutral-content p-4 rounded-lg group`}
    >
      <img className="object-cover rounded-lg" src={image} alt="image card" />

      <div className="absolute grid place-items-center w-full h-full left-0 top-0 p-10 bg-neutral-800 opacity-0 invisible transition-opacity duration-300 group-hover:opacity-90 group-hover:visible gap-4 rounded-lg">
        <h3 className="text-4xl font-semibold text-white">{title}</h3>
        <p className="leading-8 text-white text-center">{description}</p>
        <div className="flex justify-center">
          <button className="btn btn-warning btn-outline btn-wide rounded-full">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
