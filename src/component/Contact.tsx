import { motion } from "framer-motion";
import email from "../assets/email.png";
import CustomInput from "./CustomInput";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const imageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const Contact = () => {
  return (
    <>
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 1 }}
      >
        <motion.h3
          className="text-4xl font-semibold tracking-wide"
          variants={containerVariants}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Contact Us
        </motion.h3>
        <motion.div
          className="h-1 w-14 mt-4 bg-warning rounded-full"
          variants={containerVariants}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </motion.div>

      <section className="h-[50vh] container mt-20 flex">
        <motion.div
          className="flex-1 flex flex-col justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div
            className="w-full max-w-xs"
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <CustomInput title="Full Name" placeholder="ex : John Doe" />
          </motion.div>
          <motion.div
            className="w-full max-w-xs mt-4"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CustomInput title="Email" placeholder="ex : John@me.com" />
          </motion.div>
          <motion.textarea
            placeholder="Message"
            className="w-full max-w-xs outline-none border p-3 rounded-lg mt-8"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.div
            className="w-full max-w-xs"
            variants={itemVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="btn btn-warning text-white mt-5">Send</button>
          </motion.div>
        </motion.div>
        <motion.img
          src={email}
          alt="contact picture"
          className="object-cover"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.8 }}
        />
      </section>
    </>
  );
};

export default Contact;
