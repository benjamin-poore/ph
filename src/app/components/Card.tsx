// src/components/Card.tsx
import type { FC } from "react";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div
      className="bg-white rounded shadow-md p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
      // style={{ maxWidth: "320px" }}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
