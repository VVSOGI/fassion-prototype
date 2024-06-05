import { TaskButton } from "./home";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="h-full flex flex-col justify-between py-[223px]">
        <div className="flex flex-col gap-[50px] mx-auto">
          <TaskButton path="1">Task 1</TaskButton>
          <TaskButton path="2">Task 2</TaskButton>
          <TaskButton path="3">Task 3</TaskButton>
        </div>
        <div className="mx-auto">
          <div className="w-[600px] h-[120px] flex justify-center items-center bg-[#808287] text-white text-[64px] rounded-[50px]">
            전체 결과 보기
          </div>
        </div>
      </div>
    </main>
  );
}
