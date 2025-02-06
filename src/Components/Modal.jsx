import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../Hooks/useOutsideClick";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (openName !== name) return null;

  return createPortal(
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-slate-500/30 ">
      <div className="relative rounded-md bg-slate-100 " ref={ref}>
        <div className="flex flex-col">
          <div className="flex-1">
            {cloneElement(children, { onCloseModal: close })}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
