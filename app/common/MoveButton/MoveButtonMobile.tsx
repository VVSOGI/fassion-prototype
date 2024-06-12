import React from "react";
import Link from "next/link";

interface Props {
  path: string;
  children: React.ReactNode;
}

export function MoveButtonMobile({ path, children }: Props) {
  return (
    <Link
      className="w-full h-[80px] flex justify-center items-center bg-[#2C2F37] rounded-[50px] text-[32px] text-white mx-auto"
      href={path}
    >
      {children}
    </Link>
  );
}
