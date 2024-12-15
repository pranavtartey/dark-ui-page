import logo from "@/app/assets/images/logosaas.png";
import HamburgerIcon from "@/app/assets/icons/menu.svg";
import Image from "next/image";
export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4 bg-black">
        <div className="py-4 flex justify-between items-center">
          <div className="relative">
            <div className="absolute top-2 bottom-0 w-full bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image src={logo} alt="logoImage" className="h-12 w-12 relative" />
          </div>
          <div className="border border-white/60 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <HamburgerIcon className="text-white" />
          </div>
          <nav className="max-sm:hidden flex gap-4 justify-center items-center">
            <a className="link" href="#">
              About
            </a>
            <a className="link" href="#">
              Features
            </a>
            <a className="link" href="#">
              Updates
            </a>
            <a className="link" href="#">
              Help
            </a>
            <a className="link" href="#">
              Customers
            </a>
            <button className="btn">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
