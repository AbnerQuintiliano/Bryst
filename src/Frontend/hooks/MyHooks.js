import { useState } from "react"

export const useHover = () => {
   const [HowHover, setHover] = useState(false)
   const EnterHover = () => setHover(true)
   const ExitHover = () => setHover(false)
   return {
      HowHover,
      EnterHover,
      ExitHover
   }
}

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

export const useMensage = () => {
   const [HowMsg, setMsg] = useState(false);
   const handleMsg = () => {
      setMsg(true)
      setTimeout(() => {setMsg(false)}, 3000)
   }
   return {
      HowMsg,
      handleMsg
   }
}