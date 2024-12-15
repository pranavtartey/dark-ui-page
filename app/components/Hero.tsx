import ArrowIcon from "@/app/assets/icons/arrow-w.svg";
export const Hero = () => {
  return (
    <section className="bg-black bg-[linear-gradient(to_bottom,#000,#200D42_35%,#4F21A1_65%,#A46EDB_82%)] py-[72px] relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560Eb)] top-[calc(100%-96px)]"></div>
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
        <h1 className="text-white text-7xl font-bold text-center tracking-tighter mt-8">
          One Task at a time
        </h1>
        <p className="text-white text-center text-3xl mt-8">
          Celebrate the joy of acomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your success.
        </p>
        <div className="flex justify-center items -center mt-8 font-medium">
          <button className="btn">Get for free</button>
        </div>
      </div>
      
    </section>
  );
};
