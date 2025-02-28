import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-20 py-4 flex flex-col sm:flex-row justify-between bg-gray-300">
      <div className="flex flex-col justify-center sm:w-4/5">
        <div className="mb-4 ">
          <h1 className="text-3xl sm:text-6xl font-bold text-gray-900">
            Shocking Discovery: Why Some Women Look Younger at 50 Than at 30?
          </h1>
        </div>
        <div className="mb-10">
          <p className="text-sm sm:text-lg">By Dr. Sarah Mitchell,</p>
          <p className="text-sm sm:text-lg">PhD Director of Aging Research,</p>
          <p className="text-sm sm:text-lg">
            Stanford University Featured in Health & Wellness Today
          </p>
        </div>
      </div>
      <div>
        <Image
          src={"/bottle.png"}
          alt="Product Image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
