import Image from "next/image";

export default function PartOne() {
  return (
    <div className="max-w-7xl mx-auto mt-4 py-4 px-8 flex justify-between items-center">
      <div className="w-1/2 h-[448px]">
        <div className="relative w-full h-full">
          <Image
            src="/bottle.png"
            alt="Product Bottle"
            layout="fill"
            // width={200}
            // height={200}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="w-1/2 ">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          A groundbreaking discovery is leaving the American scientific
          community stunned...
        </h2>

        <p className="text-lg text-gray-700">
          During a landmark study at Stanford University, researchers observed
          something that challenges everything we thought we knew about skin
          aging:
        </p>
        <p className="text-lg text-gray-700">
          Some women in their 50s had{" "}
          <span className="font-semibold text-orange-one text-2xl">
            younger, firmer, and more radiant skin
          </span>{" "}
          than participants 20 years their junior.
        </p>
        <p className="text-lg text-gray-700">
          "At first, we thought there was an error in our data," says{" "}
          <span className="text-nowrap font-semibold italic">
            Dr. Jennifer Adams
          </span>
          , the study's lead researcher. "But after extensive analysis, we
          uncovered something{" "}
          <span className="font-semibold text-orange-one text-2xl">
            revolutionary
          </span>
          ."
        </p>
      </div>
    </div>
  );
}
