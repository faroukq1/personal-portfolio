import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import project1 from "./assets/projectsimages/project1.png";
import project2 from "./assets/projectsimages/project2.png";
export const socialMediaData = [
  {
    id: 1,
    icon: <AiFillInstagram />,
  },
  {
    id: 2,
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    icon: <MdEmail />,
  },
];

export const skillsData = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <RiTailwindCssFill />,
  <FaJs />,
  <SiTypescript />,
  <FaReact />,
  <SiSass />,
];

export const projectData = [
  {
    id: 0,
    title: "Camping Store",
    description:
      "Gear up for your next outdoor adventure with our top-quality camping equipment! We offer a wide selection of durable tents, cozy sleeping bags, portable stoves, and all the essentials to make your camping experience unforgettable. From backpacks and cookware to lanterns and survival tools, our store is your one-stop-shop for everything outdoors. Whether you're a seasoned adventurer or new to camping, our reliable gear ensures you're prepared for any trip. Explore our eco-friendly options and get ready to enjoy nature with confidence. Shop now and start your journey into the wild!",
    image: project1,
  },
  {
    id: 1,
    title: "Just Home",
    description:
      "Discover your dream property today! Our platform connects buyers and sellers with a variety of homes, apartments, and commercial properties to suit any need. Browse detailed listings featuring high-quality photos and virtual tours, making it easy to find your perfect match. Sellers can list their properties to reach a large audience, while buyers receive personalized support to navigate the process. Whether you're looking to buy or sell, our easy-to-use website provides everything you need for a seamless real estate experience. Start your property journey with us today!",
    image: project2,
  },
];
