"use client";

import React, { useEffect, useState } from "react";
import { Desktop, Tablet, Mobile } from "./components";

export default function Page() {
  const [data, setData] = useState<{ id: number; url: string }[]>([]);
  const [choice, setChoice] = useState<number>(0);

  const handleClickItem = (id: number) => {
    setChoice(id);
    const data = JSON.parse(localStorage.getItem("task1") as string) || {};
    data.top = id;
    localStorage.setItem("task1", JSON.stringify(data));
  };

  useEffect(() => {
    fetch(`${window.location.origin}/top.json`).then(async (res) => {
      const clothes = await res.json();
      setData(clothes);
    });

    const choice = localStorage.getItem("task1") as string;
    if (choice) {
      setChoice(JSON.parse(choice).top);
    }
  }, []);

  return (
    <>
      <Desktop data={data} choice={choice} handleClickItem={handleClickItem} />
      <Tablet data={data} choice={choice} handleClickItem={handleClickItem} />
      <Mobile data={data} choice={choice} handleClickItem={handleClickItem} />
    </>
  );
}
