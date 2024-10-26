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

  const dialog: JSX.Element | null = modalParameter ? (
    <dialog ref={dialogRef}>
      <div className="relative">
        <div
          className="absolute right-0 top-0 bg-red-400 rounded-lg cursor-pointer"
          onClick={onCloseModal}
        >
          X
        </div>
        {children}
      </div>
    </dialog>
  ) : null;

  return dialog;
}
