import React, { useState } from 'react';
import * as E from '../_Style';
import { Swiper , SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function ButtonSelection({Data , Modal}){
   const [selectedButtonColor, setSelectedButtonColor] = useState(0);
   const handleButtonColor = (buttonId) => {
      if(selectedButtonColor !== buttonId){
         setSelectedButtonColor(buttonId);
      }
   }

   const [selectedButtonTamanho, setSelectedButtonTamanho] = useState(0);
   const handleButtonTamanho = (buttonId) => {
      if(selectedButtonTamanho !== buttonId){
         setSelectedButtonTamanho(buttonId);
      }
   }

   return(
   <>
      <div>
         <E.LabelEstoque>Cores</E.LabelEstoque>
         <E.Dados>
            {!Modal && (<Swiper
               scrollbar={{hide:true}}
               modules={[Scrollbar]}
               slidesPerView={Data.length >=3 ? 3 : 2}
               centeredSlides={false || Data.length >=3 || Data.length ===  1 }
            >
            {Data.map((button, i) => (
               <SwiperSlide>
                  <E.BtnEscolha
                     key={button._id}
                     onClick={() => (handleButtonColor(i))}
                     style={{
                        backgroundColor:  selectedButtonColor === i ? '#7688C9': 'unset',
                     }}
                  >
                     {button.Cor}
                  </E.BtnEscolha>
               </SwiperSlide>
            ))}
            </Swiper>)}
         </E.Dados>
      </div>

      <div>
      <E.LabelEstoque>Tamanhos</E.LabelEstoque>
      <E.Dados>
         {!Modal && (<Swiper
            scrollbar={{hide:true}}
            modules={[Scrollbar]}
            slidesPerView={Data[selectedButtonColor].Tamanhos.length >=3 ? 3 : 2}
            centeredSlides={false || Data[selectedButtonColor].Tamanhos.length >=3 || Data[selectedButtonColor].Tamanhos.length ===  1 }
         >
            {Data[selectedButtonColor].Tamanhos.map((Tamanhos, i) => (
               <SwiperSlide>
                  <E.BtnEscolha
                  key={Tamanhos._id}
                  onClick={() => (handleButtonTamanho(i))}
                  style={{
                     backgroundColor:  selectedButtonTamanho === i ? '#7688C9': 'unset',
                  }}
                  >
                  {Tamanhos.Tamanho}
                  </E.BtnEscolha>
               </SwiperSlide>
            ))}
         </Swiper>)}
      </E.Dados>
      </div>

      <div>
         <E.LabelEstoque>Quantidade</E.LabelEstoque>
         <E.Dados>{(Data[selectedButtonColor].Tamanhos[selectedButtonTamanho].Quantidade)}</E.Dados>
      </div>
   </>
)}