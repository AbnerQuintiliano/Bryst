import React, { useState } from 'react';
import { BtnEscolha } from '../_Style';


function ButtonSelector(Fator) {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const buttons = [
    { id: 1, text: 'Preto' },
    { id: 2, text: 'Marrom' },
    { id: 3, text: 'Roxo' },
  ];

  return (
    <>
      {buttons.map((button) => (
        <BtnEscolha
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          style={{
            backgroundColor:  selectedButton === button.id ? '#7688C9': 'unset',
          }}
        >
          {button.text}
        </BtnEscolha>
      ))}
    </>
  );
}

export default ButtonSelector;