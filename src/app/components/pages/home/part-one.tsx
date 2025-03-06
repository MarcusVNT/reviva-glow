import Image from "next/image";

export default function PartOne() {
  return (
    <div className="max-w-7xl mx-auto mt-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="w-1/2 h-[448px]">
        <div className="relative w-full h-full">
          <Image
            src="/bottle.png"
            alt="Product Bottle"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="sm:w-1/2 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
          A groundbreaking discovery is leaving the American scientific
          community stunned...
        </h2>
        <div className="px-3">
          <p className="text-md sm:text-lg text-gray-700">
            During a landmark study at Stanford University, researchers observed
            something that challenges everything we thought we knew about skin
            aging:
          </p>
          <p className="text-md sm:text-lg text-gray-700">
            Some women in their 50s had{" "}
            <span className="font-semibold text-orange-one text-xl sm:text-2xl">
              younger, firmer, and more radiant skin
            </span>{" "}
            than participants 20 years their junior.
          </p>
          <p className="text-md sm:text-lg text-gray-700">
            "At first, we thought there was an error in our data," says{" "}
            <span className="text-nowrap font-semibold italic">
              Dr. Jennifer Adams
            </span>
            , the study's lead researcher. "But after extensive analysis, we
            uncovered something{" "}
            <span className="font-semibold text-orange-one text-xl sm:text-2xl">
              revolutionary
            </span>
            ."
          </p>
        </div>
      </div>
    </div>
  );
}
