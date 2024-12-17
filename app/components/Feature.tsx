"use client";
import EcoSystumIcon from "@/app/assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offSetX = useMotionValue(-100);
  const offSetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offSetX}px ${offSetY}px,black,transparent)`;
  const border = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const borderRect = border.current?.getBoundingClientRect();
      // if(!border.current) return
      offSetX.set(event.x - borderRect?.x!);
      offSetY.set(event.y - borderRect?.y!);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });

  return (
    <>
      <div className="bg-[#0D0D0D] px-5 flex flex-col gap-4 mb-3 rounded-xl justify-center items-center h-72 border border-white/20 relative">
        <motion.div
          ref={border}
          className="border-2 border-purple-400 inset-0 absolute rounded-xl" style={
            {
                maskImage
            }
          }
        ></motion.div>
        <div className="bg-white text-black h-14 w-14 rounded-lg flex justify-center items-center">
          <EcoSystumIcon />
        </div>
        <h3 className="text-center text-xl tracking-normal font-medium">
          {title}
        </h3>
        <p className="text-lg text-center leading-normal max-w-sm">
          {description}
        </p>
      </div>
    </>
  );
};

export default Feature;
