"use client";

import { useEffect, useRef } from "react";
import useModalHandler from "./useModalHandler";

type Props = {
  children: React.ReactNode;
  modalType: string;
};

export default function Dialog({ children, modalType }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { modalParameter, onCloseModal } = useModalHandler();

  useEffect(() => {
    const isOpen = modalParameter === modalType;
    dialogRef.current?.[isOpen ? "showModal" : "close"]();
  }, [modalParameter, modalType]);

  return (
    <dialog
      className="fixed  backdrop:bg-gray-500/50 backdrop:backdrop-blur-sm  "
      ref={dialogRef}
    >
      <button
        className="absolute right-0 top-0 bg-red-400 rounded-lg cursor-pointer"
        onClick={onCloseModal}
      >
        X
      </button>
      {children}
    </dialog>
  );
}
