import Image from "next/image";

export default function PartTwo() {
  return (
    <div className="max-w-7xl mx-auto mt-4 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-200">
      <div className="sm:w-2/3 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
          The Reverse Aging Mystery
        </h2>
        <div className="px-3">
          <p className="text-md sm:text-lg text-gray-700 mb-2">
            The research team found that these "time-frozen" women shared a
            unique characteristic: elevated levels of specific micronutrients in
            their system.
          </p>
          <p className="text-md sm:text-lg text-gray-700 mb-2">
            "It's not just about collagen or elastin anymore," Dr. Adams
            explains. "We've discovered what we call an 'epigenetic code' that,
            when activated by the right nutrients, can literally make your cells
            behave years younger."
          </p>
          <p className="text-md sm:text-lg text-gray-700 mb-4">
            This discovery explains why:
          </p>
          <ul className="list-disc list-inside pl-4 text-md sm:text-lg text-gray-700">
            <li className="mb-2">Some women seem to defy aging.</li>
            <li className="mb-2">
              Expensive department store creams often fail.
            </li>
            <li className="mb-2">
              Genetics isn't the deciding factor we thought it was.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full sm:w-1/3">
        <div className="relative w-full h-full">
          <Image
            src="/bottle.png"
            alt="Product Bottle"
            layout="responsive"
            objectFit="contain"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
