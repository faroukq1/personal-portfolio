import reclangle from "../assets/Rectangle 17.png";
import sqare from "../assets/square.png";
import { skillsData, socialMediaData } from "../DATA";

const Hero = () => {
  return (
    <section className="container h-screen flex items-center justify-between gap-8">
      <div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-2xl">Hello, I'm farouk,</h3>
          <h1 className="text-6xl font-bold">Front End Developer</h1>
          <h3 className="font-semibold text-2xl">based in algeria</h3>
          <div className="flex gap-4">
            {skillsData.map((icon, index) => {
              return (
                <span className="text-2xl my-2" key={index}>
                  {icon}
                </span>
              );
            })}
          </div>
        </div>
        <button className="btn btn-warning mt-4">Resume</button>
      </div>
      <div className="relative">
        <div className="blob"></div>
        <div className="flex absolute bottom-24 left-15">
          {Array.from({ length: 5 }).map((_, index) => {
            return <img key={index} src={reclangle} alt="rectangle" />;
          })}
        </div>
        <div className="flex w-fit absolute top-10 right-10">
          <div className="flex flex-col gap-2">
            {Array.from({ length: 2 }).map((_, index) => {
              return (
                <img
                  key={index}
                  src={sqare}
                  alt="sqare"
                  className="w-5 h-5 object-cover"
                />
              );
            })}
          </div>
          <div className="mt-3 ml-2">
            <img src={sqare} alt="square" className="w-5 h-5 object-cover" />
          </div>
        </div>
      </div>
      <div className="my-4 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-4 my-4">
          {socialMediaData.map((item) => {
            const { id, icon } = item;
            return (
              <span className="text-4xl" key={id}>
                {icon}
              </span>
            );
          })}
        </ul>
        <p className="my-4 text-sm text-neutral-400 flex flex-col items-center">
          farouk ouledmeriem <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
