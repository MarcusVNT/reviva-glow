import Header from "./header";
import Hero from "./hero";
import PartOne from "./part-one";
import PartThree from "./part-three";
import PartTwo from "./part-two";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PartOne />
      <PartTwo />
      <PartThree />
    </div>
  );
}
