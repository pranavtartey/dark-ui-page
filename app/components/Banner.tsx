import ArrowIcon from "../assets/icons/arrow-w.svg";
export const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(254,236,255,_.7),rgb(254,202,255,_.7),rgb(254,181,255,_.7),rgb(255,219,231,_.7),rgb(255,244,214,_.7),rgb(243,252,215,_.7),rgb(210,245,238,_.7),rgb(195,239,255,_.7),rgb(251,239,255,_.7))]">
      <div className="container">
        <p className="">
          <span className="font-medium max-md:hidden">Intorducing a completely redesigned interface -</span>{" "}
          <a className="underline underline-offset-4 " href="#">
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};
