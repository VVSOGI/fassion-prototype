"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  path: string;
}

export function MoveBackHeader({ path }: Props) {
  const router = useRouter();

  return (
    <div className="pl-[43px] pt-[48px]">
      <IoIosArrowBack fontSize={100} onClick={() => router.push(path)} />
    </div>
  );
}
