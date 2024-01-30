import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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

export const useMensage = (value) => {
   const [HowMsg, setMsg] = useState(value);
   const handleMsg = () => {
      setMsg(true)
      setTimeout(() => {setMsg(false)}, 3000)
   }
   return {
      HowMsg,
      handleMsg
   }
}

export const HandleLogin = ( Token=sessionStorage.getItem('token') ) =>  {
   const Navigate = useNavigate();
   const [Office, setOffice] = useState(false);
   useEffect(() => {
      if(!Token){
         console.log('não tem token')
         Navigate("/")
      }
      axios.get('http://localhost:3001/api/Auth',{
         headers:{
            'Authorization': Token
         }
      })
      .then((response) => {
         console.log(response.data)
         setOffice(response.data.TokenData.office)
      })
      .catch((error) => {
         console.log(error)
         Navigate("/")
      })
   },[Token , Navigate])
   return Office;
}