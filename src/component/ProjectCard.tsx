type projectCartType = {
  title: string;
  description: string;
  image: string;
  link: string;
};
const ProjectCard = ({ title, description, image, link }: projectCartType) => {
  return (
    <div
      className={`relative flex gap-4 bg-neutral-content p-4 rounded-lg group`}
    >
      <img
        className="object-cover rounded-lg w-[700px]"
        src={image}
        alt="image card"
      />

      <div className="absolute grid place-items-center w-full h-full left-0 top-0 p-10 bg-neutral-800 opacity-0 invisible transition-opacity duration-300 group-hover:opacity-90 group-hover:visible gap-4 rounded-lg">
        <h3 className="text-4xl font-semibold text-white">{title}</h3>
        <p className="leading-8 text-white text-center">{description}</p>
        <div className="flex gap-4 justify-center">
          <button className="btn btn-warning btn-outline rounded-full">
            View Picture
          </button>
          <a
            target="_blank"
            href={link}
            className="btn btn-warning btn-outline rounded-full"
          >
            Visite website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
