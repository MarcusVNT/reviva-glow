import Link from "next/link";
import { ImArrowDownRight2, ImArrowDownLeft2 } from "react-icons/im";

export default function CtaLinkSmall() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <ImArrowDownRight2
          size={48}
          className="animate-bounce-diagonal-right text-orange-one"
        />
        <ImArrowDownLeft2
          size={48}
          className="animate-bounce-diagonal-left text-orange-one"
        />
      </div>
      <Link
        href="./"
        className="bg-indigo-400 rounded-xl px-12 py-3 sm:1/2 text-white text-center hover:bg-orange-one hover:duration-200 hover:ease-in-out hover:text-orange-50 hover:animate-none animate-pulse"
      >
        YOUTH CODE
      </Link>
    </div>
  );
}
