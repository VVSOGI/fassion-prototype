import React from "react";

interface Props {
  currentCategory: string;
  targetCategory: string;
  list: { id: number; url: string }[] | undefined;
  choice: { id: number; url: string } | undefined;
  onClick: (id: number) => void;
}

export function List({
  currentCategory,
  targetCategory,
  list,
  choice,
  onClick,
}: Props) {
  return (
    currentCategory === targetCategory &&
    list?.map((item) => {
      return (
        <div
          key={item.id}
          className={`
          ${choice?.id === item.id ? "border-8 border-red-500" : ""}
          w-full h-[300px]
        `}
          onClick={() => onClick(item.id)}
        >
          <img
            className="w-full h-full object-cover"
            src={item.url}
            alt={item.url}
          />
        </div>
      );
    })
  );
}
