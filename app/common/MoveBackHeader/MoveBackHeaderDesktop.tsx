"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  path: string;
}

export function MoveBackHeaderDesktop({ path }: Props) {
  const router = useRouter();

  return (
    <div className="ml-[43px] mt-[48px]">
      <IoIosArrowBack fontSize={48} onClick={() => router.push(path)} />
    </div>
  );
}
