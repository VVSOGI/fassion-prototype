import { TaskButton } from "../home";
import { MoveBackHeader } from "@/app/common";

export default function Home() {
  return (
    <main className="w-full">
      <MoveBackHeader path="/" />
      <div className="h-full flex flex-col justify-between pt-[223px]">
        <div className="flex flex-col gap-[50px] mx-auto">
          <TaskButton path="/result/task1" isComplete={false}>
            Task 1
          </TaskButton>
          <TaskButton path="/result/task2" isComplete={false}>
            Task 2
          </TaskButton>
          <TaskButton path="/result/task3" isComplete={false}>
            Task 3
          </TaskButton>
        </div>
      </div>
    </main>
  );
}
