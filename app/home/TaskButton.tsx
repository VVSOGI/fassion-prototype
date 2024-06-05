import Link from "next/link";
import React from "react";

interface Props {
  path: string;
  children: React.ReactNode;
}

export function TaskButton({ children, path }: Props) {
  return (
    <Link
      className="w-[600px] h-[120px] flex justify-center items-center bg-[#2C2F37] text-white text-[64px] rounded-[50px]"
      href={`/task${path}`}
    >
      {children}
    </Link>
  );
}
