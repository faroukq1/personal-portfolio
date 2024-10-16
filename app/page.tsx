import { Button } from "@/components/ui/button";
import React from "react";
import Navbar from "./component/Navbar";
import Container from "./component/Container";
import Hero from "./component/Hero";
import Technologies from "./component/Technologies";
import Expertise from "./component/Expertise";
import Projects from "./component/Projects";
import ContactUs from "./component/ContactUs";

const page = () => {
  return (
    <>
      <Hero />
      <Technologies />
      <Expertise />
      <Projects />
      <ContactUs />
    </>
  );
};

export default page;
