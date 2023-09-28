import { useEffect } from "react";

export function Modal({ children }: React.PropsWithChildren) {
  // useEffect(() => {
  //   (window as any).my_modal_5.showModal();
  // }, []);

  return (
    // <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
    //   <div className="modal-box">{children}</div>
    // </dialog>

    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" checked />
      <div className="modal">
        <div className="modal-box">{children}</div>
      </div>
    </div>
  );
}
