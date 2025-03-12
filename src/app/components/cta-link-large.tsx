import Link from "next/link";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from "react-icons/hi2";

export default function CtaLinkLarge() {
  return (
    <div className="flex flex-row items-center justify-center gap-4 w-full">
      <HiMiniArrowSmallRight
        size={60}
        className="animate-bounce-right text-orange-one"
      />
      <Link
        href="./"
        className="bg-indigo-400 rounded-xl px-6 py-2 sm:w-1/2 text-white text-center hover:bg-orange-one hover:duration-200 hover:ease-in-out hover:text-orange-50 hover:animate-none animate-pulse"
      >
        YOUTH CODE
      </Link>
      <HiMiniArrowSmallLeft
        size={60}
        className="animate-bounce-left text-orange-one"
      />
    </div>
  );
}
