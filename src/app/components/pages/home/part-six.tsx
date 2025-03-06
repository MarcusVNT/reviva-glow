import Image from "next/image";

export default function PartSix() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col px-6 py-12 mt-10 justify-between items-center bg-orange-one">
      <div className="flex gap-1 flex-col items-center   rounded-3xl ">
        <Image
          src="/dr.chen.jpg"
          alt="Dr. Chen"
          width={300}
          height={300}
          loading="lazy"
          layout="fixed"
          className="rounded-xl"
        />
        <p className="text-md sm:text-lg text-orange-50 mt-4 text-center">
          "When these nutrients are combined in the right proportion," explains
          Dr. Chen, "it's like flipping a youth switch in your cells."
        </p>
      </div>
    </div>
  );
}
