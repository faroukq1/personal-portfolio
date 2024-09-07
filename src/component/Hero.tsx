// Hero.js
import { motion } from "framer-motion";
import reclangle from "../assets/Rectangle 17.png";
import sqare from "../assets/square.png";
import { skillsData, socialMediaData } from "../DATA";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="container h-screen flex items-center justify-between gap-8">
      <div className="grid place-items-center w-full">
        <motion.div
          className="grid gap-2"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          <motion.h3
            className="font-semibold text-2xl"
            transition={{ duration: 1 }}
          >
            Hello, I'm Farouk,
          </motion.h3>

          <motion.h1
            className="text-5xl font-bold whitespace-nowrap overflow-hidden relative"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="animate-typing">Front End Developer</span>
            <span
              className="absolute border-r-4 border-white animate-blink"
              style={{ left: "105%" }}
            ></span>
          </motion.h1>

          <motion.h3
            className="font-semibold text-2xl"
            transition={{ duration: 1.2 }}
          >
            based in Algeria
          </motion.h3>

          <div className="flex gap-4">
            {skillsData.map((icon, index) => (
              <motion.span
                className="text-2xl my-2"
                key={index}
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {icon}
              </motion.span>
            ))}
          </div>

          <motion.button
            className="btn btn-warning mt-4"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            transition={{ duration: 0.5 }}
          >
            Resume
          </motion.button>
        </motion.div>
      </div>

      <div className="relative hidden lg:block">
        <motion.div
          className="blob"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <div className="flex absolute bottom-24 left-15">
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.img
              key={index}
              src={reclangle}
              alt="rectangle"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 1, delay: index * 0.2 }}
            />
          ))}
        </div>

        <div className="flex w-fit absolute top-10 right-10">
          <div className="flex flex-col gap-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <motion.img
                key={index}
                src={sqare}
                alt="square"
                className="w-5 h-5 object-cover"
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            ))}
          </div>

          <div className="mt-3 ml-2">
            <motion.img
              src={sqare}
              alt="square"
              className="w-5 h-5 object-cover"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      <div className="my-4 absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <motion.ul
          className="flex gap-4 my-4"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          {socialMediaData.map((item) => {
            const { id, icon } = item;
            return (
              <motion.span
                className="text-4xl"
                key={id}
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ duration: 0.5 }}
              >
                {icon}
              </motion.span>
            );
          })}
        </motion.ul>

        <motion.p
          className="my-4 text-sm text-neutral-400 flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 1 }}
        >
          Farouk Ouledmeriem <span>{new Date().getFullYear()}</span>
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
