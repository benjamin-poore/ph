// src/components/Section.tsx
import type { FC } from "react";
import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  headerColor?: string;
  headerFontSize?: string;
  headerTextColor?: string;
  bodyColor?: string;
  bodyFontSize?: string;
  bodyTextColor?: string;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({
  title,
  children,
  headerColor,
  headerTextColor,
  headerFontSize = "text-3xl",
  bodyFontSize = "text-lg",
  bodyTextColor,
  bodyColor = "gray",
}) => {
  return (
    <div
      className={`py-12 bg-${headerColor} text-${headerTextColor} text-center`}
    >
      <h2 className={`${headerFontSize} font-bold`}>{title}</h2>
      <div
        className={`${bodyFontSize} bg-${bodyColor}-500 text-${bodyTextColor}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
