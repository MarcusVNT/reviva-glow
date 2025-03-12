import Image from "next/image";
import CtaLinkSmall from "../../cta-link-small";
import CtaLinkLarge from "../../cta-link-large";
import { useEffect, useState } from "react";

export default function PartSeven() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(min-width: 500px)");
      setIsLargeScreen(mediaQuery.matches);

      const handleResize = () => setIsLargeScreen(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleResize);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-4 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-300">
      <div className="px-6 flex flex-col justify-center items-center mb-10">
        <div className="inline-block rounded-lg bg-gray-200 mb-10 mt-8 px-4 py-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            What This Means for American Women?
          </h2>
        </div>
        <p className="text-md sm:text-lg text-gray-800 text-center mb-3">
          This discovery is revolutionizing our understanding of aging.
        </p>
        <div className="items-center mb-6 sm:w-1/2">
          <p className="text-md sm:text-lg text-gray-800 text-center mb-3">
            "We're moving beyond Botox and fillers," says Dr. Adams. "We can now
            actually influence how our cells behave at a genetic level."
          </p>
          <div className="sm:w-2/3 mx-auto">
            <Image
              src="/dr.adams.jpg"
              alt="Dr. Adams"
              width={150}
              height={100}
              loading="lazy"
              layout="responsive"
              className="rounded-3xl"
            />
          </div>
        </div>
        <p className="text-md sm:text-lg text-gray-800 text-center mb-3">
          In fact, this breakthrough is so significant that major beauty
          companies are scrambling to acquire the rights to this research. But
          there's something they don't want you to know...
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-3 mt-3">
          CLICK THE BUTTON BELOW TO DISCOVER HOW TO ACTIVATE YOUR YOUTH CODE
          <span className="text-orange-one">!!!</span>
        </h3>

        {isLargeScreen ? <CtaLinkLarge /> : <CtaLinkSmall />}
      </div>
    </div>
  );
}
