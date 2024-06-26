import React from "react";

interface Props {
  children: React.ReactNode;
  currentCategory: string;
  targetCategory: string;
  setCategory: (category: string) => void;
}

export function CategoryDesktop({
  children,
  currentCategory,
  targetCategory,
  setCategory,
}: Props) {
  return (
    <div
      className={`
            ${
              currentCategory === targetCategory
                ? "bg-[#2C2F37] text-white"
                : "bg-white border-black border-[3px]"
            }
            w-[150px] h-[47.14px] flex justify-center items-center rounded-[30px] text-[24px] cursor-pointer
        `}
      onClick={() => setCategory(targetCategory)}
    >
      {children}
    </div>
  );
}
