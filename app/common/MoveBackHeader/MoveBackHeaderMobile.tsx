"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  path: string;
}

export function MoveBackHeaderMobile({ path }: Props) {
  const router = useRouter();

  return (
    <div className="pl-[24px] pt-[24px]">
      <IoIosArrowBack fontSize={50} onClick={() => router.push(path)} />
    </div>
  );
}
