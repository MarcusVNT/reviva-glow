import Header from "./header";
import Hero from "./hero";
import PartOne from "./part-one";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PartOne />
    </div>
  );
}
