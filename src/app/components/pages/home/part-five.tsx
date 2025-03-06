import Image from "next/image";

export default function PartFive() {
  return (
    <div className="max-w-7xl mx-auto mt-4 py-4 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-200">
      <div className="px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
          The Science Behind the Breakthrough
        </h2>
        <div className="px-3">
          <p className="text-md sm:text-lg text-gray-700 mb-4">
            Researchers identified that the secret lies in a specific
            combination of:
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="bg-blue-gray-100 p-4 rounded-3xl gap-4 flex flex-col items-center sm:w-1/3">
              <Image
                src="/folate.jpg"
                alt="folate"
                width={150}
                height={100}
                loading="lazy"
                layout="responsive"
                className="rounded-3xl"
              />
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl">Bioactive Folate</h3>
                <h4 className="text-lg sm:text-xl">Vitamin B9</h4>
              </div>
              <p className="text-md sm:text-lg text-gray-800 text-center">
                Folic acid restores mature skin, boosting cell renewal, cutting
                down wrinkles, and bringing back firmness and glow.
              </p>
            </div>
            <div className="bg-blue-gray-100 p-4 rounded-3xl gap-4 flex flex-col items-center sm:w-1/3">
              <Image
                src="/b12.jpg"
                alt="b12"
                width={150}
                height={100}
                loading="lazy"
                layout="responsive"
                className="rounded-3xl"
              />

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl">Methylated B12</h3>
                <h4 className="text-lg sm:text-xl">Vitamin B12</h4>
              </div>
              <p className="text-md sm:text-lg text-gray-800 text-center">
                Vitamin B12, also known as cobalamin, is key for skin health. It
                helps renew cells, reduce inflammation, and produce melanin, the
                pigment that gives skin its color.
              </p>
            </div>

            <div className="bg-blue-gray-100 p-4 rounded-3xl gap-4 flex flex-col items-center sm:w-1/3">
              <Image
                src="/b7.jpg"
                alt="b7"
                width={150}
                height={100}
                loading="lazy"
                layout="responsive"
                className="rounded-3xl"
              />

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl">Biotin</h3>
                <h4 className="text-lg sm:text-xl">Vitamin B7</h4>
              </div>
              <p className="text-md sm:text-lg text-gray-800 text-center">
                This vitamin helps keep your skin, nails, and hair healthy by
                playing a key role in producing keratin (the protein that builds
                these structures).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
