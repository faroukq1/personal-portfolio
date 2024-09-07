import heroimage from "../assets/heropic.png";
import reclangle from "../assets/Rectangle 17.png";
import sqare from "../assets/square.png";
import vector from "../assets/Vector.png";
const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-between gap-8">
      <div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-2xl">Hello, I'm farouk,</h3>
          <h1 className="text-6xl font-bold">Front End Developer</h1>
          <h3 className="font-semibold text-2xl">based in algeria</h3>
        </div>
        <button className="btn btn-warning mt-8">Resume</button>
      </div>
      <div className="relative">
        <img src={vector} alt="vector" className="absolute" />
        <img src={heroimage} alt="hero" className="rounded-full" />
        <div className="flex absolute bottom-20 left-15">
          {Array.from({ length: 5 }).map((_, index) => {
            return <img key={index} src={reclangle} alt="rectangle" />;
          })}
        </div>
        <div className="flex w-fit absolute top-0 right-0">
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
    </div>
  );
};

export default Hero;
