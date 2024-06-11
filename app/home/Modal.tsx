import React from "react";

interface Props {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  reset: () => void;
}

export function Modal({ modalOpen, setModalOpen, reset }: Props) {
  return (
    modalOpen && (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]"
          onClick={() => setModalOpen(false)}
        ></div>
        <div className="w-[700px] h-[500px] flex flex-col bg-white rounded-[30px] z-[10]">
          <div className="h-full flex justify-center items-center text-[48px]">
            리셋 하시겠습니까?
          </div>
          <div className="h-[200px] flex border-t-2">
            <div
              className="flex-1 flex justify-center items-center bg-red-700 text-white text-[32px] rounded-bl-[30px] border-r"
              onClick={reset}
            >
              예
            </div>
            <div
              className="flex-1 flex justify-center items-center text-[32px]"
              onClick={() => setModalOpen(false)}
            >
              아니오
            </div>
          </div>
        </div>
      </div>
    )
  );
}
