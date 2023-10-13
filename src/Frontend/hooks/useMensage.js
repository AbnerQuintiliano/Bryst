import { useState } from "react";

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