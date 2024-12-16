import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import React from "react";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-center text-xl tracking-wide max-sm:max-w-[300px] mx-auto text-white/70">
            Trusted by the world&apos;s most innovative teams
          </h2>
        </div>
        <div className="[mask-image:linear-gradient(to_right,transparent,black,transparent)] overflow-x-hidden">
          <div className="flex flex-none gap-14">
            {images.map((img) => (
              <React.Fragment key={img.alt}>
                <Image src={img.src} alt={img.alt} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
