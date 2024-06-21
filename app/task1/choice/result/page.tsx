import React from "react";
import { ResultDesktop, ResultMobile, ResultTablet } from "@/app/common";

export default function Page() {
  return (
    <div>
      <ResultDesktop task="task1" backHref="/task1/choice" nextHref="/task2" />
      <ResultTablet task="task1" backHref="/task1/choice" nextHref="/task2" />
      <ResultMobile task="task1" backHref="/task1/choice" nextHref="/task2" />
    </div>
  );
}
