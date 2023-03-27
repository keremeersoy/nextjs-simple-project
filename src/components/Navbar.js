import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#C69749] w-full flex items-center justify-between py-4 px-20">
      <Link className="font-bold text-3xl" href={"/"}>
        Phone Info
      </Link>

      <div className="flex items-center gap-10">
        <Link href={"/about"}>About</Link>
        <Link href={"/phone"}>All Phones</Link>
      </div>
    </div>
  );
}
