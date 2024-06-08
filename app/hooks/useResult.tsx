import { useEffect, useState } from "react";

export default function useResult(targetTask: string) {
  const [top, setTop] = useState<{ id: number; url: string }>();
  const [bottom, setBottom] = useState<{ id: number; url: string }>();
  const [outer, setOuter] = useState<{ id: number; url: string }>();

  useEffect(() => {
    if (!targetTask) return;

    const choice = (localStorage.getItem(targetTask) as string) || "{}";
    const data = JSON.parse(choice);

    if (data.top) {
      fetch(`${window.location.origin}/top.json`).then(async (res) => {
        const clothes = (await res.json()) as { id: number; url: string }[];
        setTop(clothes.find((item) => item.id === data.top));
      });
    }

    if (data.bottom) {
      fetch(`${window.location.origin}/bottom.json`).then(async (res) => {
        const clothes = (await res.json()) as { id: number; url: string }[];
        setBottom(clothes.find((item) => item.id === data.bottom));
      });
    }

    if (data.outer) {
      fetch(`${window.location.origin}/outer.json`).then(async (res) => {
        const clothes = (await res.json()) as { id: number; url: string }[];
        setOuter(clothes.find((item) => item.id === data.outer));
      });
    }
  }, [targetTask]);

  return {
    top,
    bottom,
    outer,
  };
}
