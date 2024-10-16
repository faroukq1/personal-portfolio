import { Button } from "@/components/ui/button";
import React from "react";
import Navbar from "./component/Navbar";
import Container from "./component/Container";
import Hero from "./component/Hero";

const page = () => {
  return (
    <main>
      <div className="border-b pb-2">
        <Navbar />
      </div>
      <Hero />
    </main>
  );
};

export default page;
