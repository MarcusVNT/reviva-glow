import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { useCallback } from "react";

export default function PartFour() {
  const handlePointerEnter = useCallback(() => {}, []);
  const handlePointerLeave = useCallback(() => {}, []);
  return (
    <div className="max-w-7xl mx-auto flex flex-col px-6 py-12 justify-between items-center bg-orange-one">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-start">
        The Silent Revolution Sweeping Across America
      </h2>

      <div className="flex flex-col items-start sm:mb-8 px-3">
        <p className="text-md sm:text-lg text-orange-50 mb-2">
          Mary Thompson, 58, from Connecticut, was one of the study
          participants.
        </p>
        <p className="text-md sm:text-lg text-orange-50 mb-2">
          "When they told me my skin showed markers of someone in their 30s, I
          couldn't believe it. But the lab results don't lie."
        </p>
        <p className="text-md sm:text-lg text-orange-50 mb-2">
          And Mary isn't alone.
        </p>
        <p className="text-md sm:text-lg text-orange-50 mb-4">
          Hundreds of women who've discovered how to activate this "youth code"
          are experiencing similar results:
        </p>
        <ul className="list-disc list-inside sm:pl-4 text-md sm:text-lg text-orange-50 mb-10">
          <li className="font-medium mb-2">Only work on the surface level.</li>
          <li className="font-medium mb-2">
            Don't deliver essential nutrients.
          </li>
          <li className="font-medium mb-2">
            Mask problems instead of solving them.
          </li>
        </ul>
        <p className="text-md sm:text-lg text-orange-50 font-semibold italic ">
          But the real question is: why are some women naturally reversing aging
          while others aren't?
        </p>
      </div>
      <Carousel
        className="rounded-lg w-full h-[500px]"
        loop
        autoplay
        placeholder=""
        onPointerEnterCapture={handlePointerEnter}
        onPointerLeaveCapture={handlePointerLeave}
      >
        <div className="relative w-full h-full">
          <Image src="/2.png" alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-full h-full">
          <Image src="/3.png" alt="" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-full h-full">
          <Image src="/4.png" alt="" layout="fill" objectFit="contain" />
        </div>
      </Carousel>
    </div>
  );
}
