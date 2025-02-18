import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-20 py-4 flex flex-row justify-between bg-gray-200">
      <div className="flex flex-col justify-center">
        <div className="mb-4 max-w-2xl">
          <h1 className="text-6xl font-bold text-gray-900">
            Shocking Discovery: Why Some Women Look Younger at 50 Than at 30?
          </h1>
        </div>
        <div>
          <p className="text-xl">By Dr. Sarah Mitchell,</p>
          <p className="text-xl">PhD Director of Aging Research,</p>
          <p className="text-xl">
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
