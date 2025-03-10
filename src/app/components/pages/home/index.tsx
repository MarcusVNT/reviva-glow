"use client";
import ArrowDown from "../../arrow-down";
import Header from "./header";
import Hero from "./hero";
import PartFive from "./part-five";
import PartFour from "./part-four";
import PartOne from "./part-one";
import PartSix from "./part-six";
import PartThree from "./part-three";
import PartTwo from "./part-two";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PartOne />
      <ArrowDown />
      <PartTwo />
      <ArrowDown />
      <PartThree />
      <PartFour />
      <ArrowDown />
      <PartFive />
      <PartSix />
      <ArrowDown />
    </div>
  );
}
