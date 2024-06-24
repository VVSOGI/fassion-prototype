import React from "react";
import { ResultDesktop, ResultMobile, ResultTablet } from "@/app/common";

export default function Page() {
  const task = "task1";
  const backHref = "/task1/choice";
  const nextHref = "/task2";

  return (
    <div>
      <ResultDesktop task={task} backHref={backHref} nextHref={nextHref} />
      <ResultTablet task={task} backHref={backHref} nextHref={nextHref} />
      <ResultMobile task={task} backHref={backHref} nextHref={nextHref} />
    </div>
  );
}
