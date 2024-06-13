import React from "react";
import Link from "next/link";

interface Props {
  path: string;
  children: React.ReactNode;
}

export function MoveButtonDesktop({ path, children }: Props) {
  return (
    <Link
      className="w-[500px] h-[70px] flex justify-center items-center bg-[#2C2F37] rounded-[50px] text-[24px] text-white mx-auto"
      href={path}
    >
      {children}
    </Link>
  );
}
