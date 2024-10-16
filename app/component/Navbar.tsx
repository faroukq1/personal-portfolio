import Image from "next/image";
import logo from "../public/logo.svg";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import Container from "./Container";
const navlinks = ["About", "My Work", "Contact"];

const Navbar = () => {
  return (
    <Container>
      <nav className="flex justify-between py-3">
        <Image src={logo} height={50} width={50} alt="logo" />
        <ul className="flex gap-10">
          {navlinks.map((label, index) => {
            return (
              <Button key={index} asChild variant="ghost">
                <p className="text-xl font-semibold">{label}</p>
              </Button>
            );
          })}
        </ul>
        <div className="flex gap-2">
          <ModeToggle />
          <Button>Hire me</Button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
