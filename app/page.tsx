import { Button } from "@/components/ui/button";
import React from "react";
import Navbar from "./component/Navbar";
import Container from "./component/Container";
import Hero from "./component/Hero";
import Technologies from "./component/Technologies";
import Expertise from "./component/Expertise";

const page = () => {
  return (
    <>
      <Hero />
      <Technologies />
      <Expertise />
    </>
  );
};

export default page;
