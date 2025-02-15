// src/components/Hero.tsx
import type { FC } from "react";
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string[];
  backgroundImage: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative bg-slate-400 md:h-[80vh] w-full flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 h-full w-full">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover" // Ensure it covers the area on larger screens
          className="object-contain object-center md:object-cover" // Center image on mobile, cover on desktop
        />
      </div>
      <div className="relative z-10 container mx-auto p-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-shadow-md">
          {title}
        </h1>
        {subtitle && subtitle.length > 0 && (
          <div className="text-base md:text-lg lg:text-xl text-white text-shadow-md">
            {subtitle.map((item, index) => (
              <p className="p-4" key={index}>
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
