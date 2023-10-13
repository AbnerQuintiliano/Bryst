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