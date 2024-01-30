import React, { useState } from 'react';
import * as E from './home/components/estoque/estoque'
// import MainTela from '../components/MainTela';
import * as T from './estoque/_Style';
// import * as V from '../components/_variaveis';
import { Swiper , SwiperSlide } from "swiper/react";
// import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

const MyCarousel = () => {
   const items = useState([
  {
      "Cor": "Preta",
      "Tamanhos": [
          {
              "Tamanho": "M",
              "Quantidade": 2,
              "_id": "6562c54c18218260708a8291"
          },
          {
              "Tamanho": "G",
              "Quantidade": 5,
              "_id": "6562c54c18218260708a8292"
          }
      ],
      "_id": "6562c54c18218260708a8290"
  },
  {
      "Cor": "Branca",
      "Tamanhos": [
          {
              "Tamanho": "M",
              "Quantidade": 10,
              "_id": "656a3d248fad7e045b8f604d"
          }
      ],
      "_id": "656a3d248fad7e045b8f604c"
  },
  {
      "Cor": "Verde",
      "Tamanhos": [
          {
              "Tamanho": "g",
              "Quantidade": 0,
              "_id": "656a7a5889dc882285f6ecc4"
          }
      ],
      "_id": "656a7a5889dc882285f6ecc3"
  },
  {
      "Cor": "azul",
      "Tamanhos": [
          {
              "Tamanho": "g",
              "Quantidade": 0,
              "_id": "656a7a8189dc882285f6ed09"
          }
      ],
      "_id": "656a7a8189dc882285f6ed08"
  },
  {
      "Cor": "amarelo",
      "Tamanhos": [
          {
              "Tamanho": "p",
              "Quantidade": 0,
              "_id": "656a7a8189dc882285f6ed0b"
          }
      ],
      "_id": "656a7a8189dc882285f6ed0a"
  },
  {
      "Cor": "roxo",
      "Tamanhos": [
          {
              "Tamanho": "g",
              "Quantidade": 0,
              "_id": "656a7a9e89dc882285f6ed62"
          }
      ],
      "_id": "656a7a9e89dc882285f6ed61"
  }
]);




return (
   <>
   <div style={{ width:'200px', height: '200px'  , backgroundColor:'red' , display: 'flex', justifyContent: 'center', alignItems:'center'}}>
      <T.Dados $Special>
         <SwiperT Data={items}/>
         <SwiperT Data={items}/>
         <SwiperT Data={items}/>
      </T.Dados>
   </div>
   <SwiperT Data={items}/>
   </>

)};

export default MyCarousel;

const SwiperT = () => {
   // eslint-disable-next-line no-unused-vars
const [items, _] = useState([
    {
        "Cor": "Preta",
        "Tamanhos": [
            {
                "Tamanho": "M",
                "Quantidade": 2,
                "_id": "6562c54c18218260708a8291"
            },
            {
                "Tamanho": "G",
                "Quantidade": 5,
                "_id": "6562c54c18218260708a8292"
            }
        ],
        "_id": "6562c54c18218260708a8290"
    },
    {
        "Cor": "Branca",
        "Tamanhos": [
            {
                "Tamanho": "M",
                "Quantidade": 10,
                "_id": "656a3d248fad7e045b8f604d"
            }
        ],
        "_id": "656a3d248fad7e045b8f604c"
    },
    {
        "Cor": "Verde",
        "Tamanhos": [
            {
                "Tamanho": "g",
                "Quantidade": 0,
                "_id": "656a7a5889dc882285f6ecc4"
            }
        ],
        "_id": "656a7a5889dc882285f6ecc3"
    },
    {
        "Cor": "azul",
        "Tamanhos": [
            {
                "Tamanho": "g",
                "Quantidade": 0,
                "_id": "656a7a8189dc882285f6ed09"
            }
        ],
        "_id": "656a7a8189dc882285f6ed08"
    },
    {
        "Cor": "amarelo",
        "Tamanhos": [
            {
                "Tamanho": "p",
                "Quantidade": 0,
                "_id": "656a7a8189dc882285f6ed0b"
            }
        ],
        "_id": "656a7a8189dc882285f6ed0a"
    },
    {
        "Cor": "roxo",
        "Tamanhos": [
            {
                "Tamanho": "g",
                "Quantidade": 0,
                "_id": "656a7a9e89dc882285f6ed62"
            }
        ],
        "_id": "656a7a9e89dc882285f6ed61"
    }
]);
return(
<T.Dados>
   <Swiper
      style={{backgroundColor: 'black'}}
      slidesPerView={2}
      centeredSlides={true}
      width={200}
      height={20}
     // pagination={{ clickable: true }}
     // navigation
   >
   {items.map((button, i) => (
      <SwiperSlide>
            <T.BtnEscolha
               key={button._id}
               onClick={() => (console.log(i))}
               // style={{
               //   backgroundColor:  selectedButtonColor === i ? '#7688C9': 'unset',
               // }}
            >
               {button.Cor}
            </T.BtnEscolha>
      </SwiperSlide>
   ))}
   </Swiper>
</T.Dados>
)}