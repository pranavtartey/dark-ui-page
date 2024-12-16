import ArrowIcon from "@/app/assets/icons/arrow-w.svg";
import CursorImage from "@/app/assets/images/cursor.png";
import MessageImage from "@/app/assets/images/message.png";
import Image from "next/image";
export const Hero = () => {
  return (
    <section className="bg-black bg-[linear-gradient(to_bottom,#000,#200D42_35%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1538px] sm:h-[768px] lg:w-[2400px] lg:h[1200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560Eb)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            className="border border-white/60 text-white py-1 px-2 rounded-lg tracking-wide inline-flex gap-2 justify-center items-center "
            href="#"
          >
            <span className="text-transparent bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] bg-clip-text">
              Version 2.0 is here
            </span>{" "}
            <span className="flex items-center justify-center gap-1">
              <span>Read more</span>
              <ArrowIcon />
            </span>
          </a>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-white text-7xl sm:text-9xl font-bold text-center tracking-tighter inline-flex">
              One Task <br />
              at a time
            </h1>
            <Image
              src={CursorImage}
              alt="cursor-image"
              height={200}
              width={200}
              className="max-sm:hidden absolute right-[486px] top-[108px]"
            />
            <Image
              src={MessageImage}
              alt="message-image"
              height={200}
              width={200}
              className="max-sm:hidden absolute top-[56px] right-[-175px]"
            />
          </div>
        </div>
        <p className="text-white mx-auto text-center text-xl mt-8 max-w-md">
          Celebrate the joy of acomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your success.
        </p>
        <div className="flex justify-center items -center mt-8 font-medium">
          <button className="btn hover:tracking-wide hover:bg-white/60 transit">Get for free</button>
        </div>
      </div>
    </section>
  );
};
