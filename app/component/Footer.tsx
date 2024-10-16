import Image from "next/image";
import image from "../public/logo.svg";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Container from "./Container";

const socialMedia = [
  <BiLogoGmail />,
  <FaGithub />,
  <FaLinkedin />,
  <FaSquareWhatsapp />,
];
const Footer = () => {
  return (
    <Container>
      <div className="flex justify-between py-4">
        <div className="flex items-center gap-4">
          <Image src={image} alt="logo" width={50} height={50} />
          <h1 className="font-semibold">Ouled Meriem Farouk</h1>
        </div>
        <ul className="flex gap-4">
          {socialMedia.map((icon, index) => {
            return (
              <li className="text-3xl" key={index}>
                {icon}
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
