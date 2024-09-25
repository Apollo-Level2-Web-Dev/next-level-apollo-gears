/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, ModalContent } from "@nextui-org/react";

const CustomModal = ({ children, ...props }: any) => {
  return (
    <Modal {...props}>
      <ModalContent className="p-4">{children}</ModalContent>
    </Modal>
  );
};

export default CustomModal;
