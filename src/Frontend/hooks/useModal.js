import { useState } from "react";

export const useModal = () => {
   const [Modal, setModal] = useState(false);
   const openModal = () => setModal(true);
   const closeModal = () => setModal(false);
   return {
      Modal,
      openModal,
      closeModal
   }
}