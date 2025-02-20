import Image from "next/image";

export default function PartTwo() {
  return (
    <div className="max-w-7xl mx-auto mt-4 py-4 px-8 flex flex-col sm:flex-row justify-between items-center">
      <div className="w-1/3">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          The Reverse Aging Mystery
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          The research team found that these "time-frozen" women shared a unique
          characteristic: elevated levels of specific micronutrients in their
          system.
        </p>
        <p className="text-lg text-gray-700 mb-2">
          "It's not just about collagen or elastin anymore," Dr. Adams explains.
          "We've discovered what we call an 'epigenetic code' that, when
          activated by the right nutrients, can literally make your cells behave
          years younger."
        </p>
        <p className="text-lg text-gray-700 mb-4">
          This discovery explains why:
        </p>
        <ul className="list-disc list-inside pl-4 text-lg text-gray-700">
          <li className="mb-2">Some women seem to defy aging.</li>
          <li className="mb-2">
            Expensive department store creams often fail.
          </li>
          <li className="mb-2">
            Genetics isn't the deciding factor we thought it was.
          </li>
        </ul>
      </div>
      <div className="w-1/3">
        <div className="relative w-full h-full">
          <Image
            src="/bottle.png"
            alt="Product Bottle"
            layout="responsive"
            objectFit="contain"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="w-1/3">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          The $93 Billion Cosmetic Industry's Best-Kept Secret
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          "The biggest mistake I see," says Dr. Lisa Chen, a leading Beverly
          Hills dermatologist, "is women spending hundreds at Sephora and
          Nordstrom on creams that simply cannot penetrate the skin's deep
          layers."
        </p>
        <p className="text-lg text-gray-700 mb-2">
          A recent Mayo Clinic study revealed that 92% of anti-aging products:
        </p>
        <ul className="list-disc list-inside pl-4 text-lg text-gray-700">
          <li className="mb-2">Only work on the surface level.</li>
          <li className="mb-2">Don't deliver essential nutrients.</li>
          <li className="mb-2">Mask problems instead of solving them.</li>
        </ul>
      </div>
    </div>
  );
}
