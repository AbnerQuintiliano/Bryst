import React, { useState } from 'react';
import { BtnEscolha } from '../_Style';


function ButtonSelector(Fator) {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const buttons = [
    { id: 1, text: 'P' },
    { id: 2, text: 'M' },
    { id: 3, text: 'G' },
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