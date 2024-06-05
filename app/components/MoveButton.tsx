import React from "react";
import Link from "next/link";

interface Props {
  path: string;
  children: React.ReactNode;
}

export function MoveButton({ path, children }: Props) {
  return (
    <Link
      className="w-[600px] h-[120px] flex justify-center items-center bg-[#2C2F37] rounded-[50px] text-[64px] text-white mx-auto"
      href={path}
    >
      {children}
    </Link>
  );
}
