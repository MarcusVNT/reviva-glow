import Image from "next/image";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-6 flex items-center gap-2">
        <div className="w-2/5 flex justify-center items-center">
          <Image src="/moneyback.png" alt="guarantee" width={80} height={80} />
        </div>
        <div className="text-center flex flex-col items-center">
          <h3 className="text-md text-gray-800 font-bold">
            100% Satisfaction 60-Day Money Back Guarantee
          </h3>
          <p className="text-xs text-gray-800">
            If you are not impressed with the results, then just write to us and
            we’ll refund every single cent.
          </p>
        </div>
      </div>
    </div>
  );
}
