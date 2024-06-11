import Link from "next/link";
import React from "react";

interface Props {
  path: string;
  children: React.ReactNode;
  isComplete: boolean;
}

export function TaskButtonTablet({ children, path, isComplete }: Props) {
  return (
    <Link
      className={`
      ${isComplete ? "opacity-[30%]" : ""}
      w-[600px] h-[120px] flex justify-center items-center bg-[#2C2F37] text-white text-[64px] rounded-[50px]`}
      href={path}
    >
      {children}
    </Link>
  );
}
