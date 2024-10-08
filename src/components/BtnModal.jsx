import { Button, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

// eslint-disable-next-line react/prop-types
const BtnModal = ({ children, title, textButton, icon }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { handlerError } = useContext(UserContext);

  // Cuando se cierra el modal se limpia el error
  const handlerCloseModal = () => {
    handlerError(false);
    onOpenChange();
  };

  return (
    <>
      <Button 
        onPress={onOpen} 
        className="bg-primary text-white shadow-lg mb-4 w-full sm:w-52 h-24" // Cambiar a w-full para móviles
      >
        {textButton}
        {icon}
      </Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={handlerCloseModal} 
        placement="center" 
        className="w-full sm:w-1/3" // Cambiar a w-full para móviles
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader>{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BtnModal;

