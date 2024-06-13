import Link from "next/link";
import React from "react";

interface Props {
  path: string;
  children: React.ReactNode;
  isComplete: boolean;
}

export function TaskButtonDesktop({ children, path, isComplete }: Props) {
  return (
    <Link
      className={`
      ${isComplete ? "opacity-[30%]" : ""}
      w-[500px] h-[70px] flex justify-center items-center mx-auto bg-[#2C2F37] text-white text-[24px] rounded-[50px]`}
      href={path}
    >
      {children}
    </Link>
  );
}
