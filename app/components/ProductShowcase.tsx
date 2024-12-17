"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <section className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive Interface
        </h2>
        <p className="text-xl text-center text-white/70 mt-5 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
        <motion.div
          style={{
            opacity,
            rotateX,
            transformPerspective: "800px",
          }}
          ref={imageRef}
        >
          <Image src={appScreen} alt="app-screen" className="mt-14 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};
