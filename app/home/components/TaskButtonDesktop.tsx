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
      w-[800px] h-[140px] flex justify-center items-center bg-[#2C2F37] text-white text-[84px] rounded-[50px]`}
      href={path}
    >
      {children}
    </Link>
  );
}
