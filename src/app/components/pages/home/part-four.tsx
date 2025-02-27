import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { useCallback } from "react";

export default function PartFour() {
  const handlePointerEnter = useCallback(() => {}, []);
  const handlePointerLeave = useCallback(() => {}, []);
  return (
    <div className="max-w-7xl mx-auto py-4 px-8 flex flex-col  justify-between items-center bg-orange-one">
      <div className="flex items-center">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-start">
          The Silent Revolution Sweeping Across America
        </h2>
      </div>
      <div className="flex flex-col items-start mb-8">
        <p className="text-lg text-orange-50 mb-2">
          Mary Thompson, 58, from Connecticut, was one of the study
          participants.
        </p>
        <p className="text-lg text-orange-50 mb-2">
          "When they told me my skin showed markers of someone in their 30s, I
          couldn't believe it. But the lab results don't lie."
        </p>
        <p className="text-lg text-orange-50 mb-2">And Mary isn't alone.</p>
        <p className="text-lg text-orange-50 mb-2">
          Hundreds of women who've discovered how to activate this "youth code"
          are experiencing similar results:
        </p>
        <ul className="list-disc list-inside pl-4 text-lg text-orange-50">
          <li className="mb-2">Only work on the surface level.</li>
          <li className="mb-2">Don't deliver essential nutrients.</li>
          <li className="mb-2">Mask problems instead of solving them.</li>
        </ul>
        <p className="text-lg text-orange-50 font-semibold">
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
