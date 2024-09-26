import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <MaxWidthWrapper className="sticky top-0  mb-11 backdrop-blur rounded-b-sm">
      <nav className=" w-full flex items-center justify-between max-w-7xl px-4 py-3">
        <Link href="/" className="font-bold text-4xl">
          Marshal<span className="text-primary">Blog</span>
        </Link>
        
        <ModeToggle></ModeToggle>
      </nav>
    </MaxWidthWrapper>
  );
};

export default Navbar;
