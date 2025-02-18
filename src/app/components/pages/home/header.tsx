import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div>
        <Image
          src={"/reviva-glow-logo.png"}
          alt="Logo"
          width={130}
          height={66}
        />
      </div>
      <div>
        <Link
          href="https://therevivaglow.com//help/contact-us.php"
          className="bg-indigo-400 p-2 rounded-md text-white"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
