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
    <div className="pl-[43px] pt-[48px]">
      <IoIosArrowBack fontSize={72} onClick={() => router.push(path)} />
    </div>
  );
}
