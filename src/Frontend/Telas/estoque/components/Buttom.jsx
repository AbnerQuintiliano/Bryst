import React, { useEffect, useState } from 'react';
import { BtnEscolha } from '../_Style';


function ButtonSelector(Data, PegaValue) {
  const Obj = Data.Data
  const [selectedButton, setSelectedButton] = useState(1);
  console.log(Obj)
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <>
      {Obj !== undefined && Obj.map((button, i) => (
        <BtnEscolha
          key={button._id}
          onClick={() => handleButtonClick(i)}
          style={{
            backgroundColor:  selectedButton === i ? '#7688C9': 'unset',
          }}
        >
          {button.Cor}
          {/* {button.Tamanhos} tenta resolver com contextapi*/}
        </BtnEscolha>

      ))}
    </>
  );
}

export default ButtonSelector;