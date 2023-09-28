import { Outlet, useLocation } from "react-router-dom";
import { Modal } from "../components/Modal";

const ModalLayout = () => {
  const { state } = useLocation();

  console.log(state);

  return state?.backgroundLocation ? (
    <Modal>
      <Outlet />
    </Modal>
  ) : (
    <Outlet />
  );

  //   return (
  //     <Modal>
  //       <Outlet />
  //     </Modal>
  //   );
};

export default ModalLayout;
