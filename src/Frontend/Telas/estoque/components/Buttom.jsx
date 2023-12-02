import React, { useState } from 'react';
import * as V from '../../../components/_variaveis';
import * as E from '../_Style';

export default function ButtonSelection({Data}){
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
        {Data.map((button, i) => (
            <E.BtnEscolha
              key={button._id}
              onClick={() => (handleButtonColor(i))}
              style={{
                backgroundColor:  selectedButtonColor === i ? '#7688C9': 'unset',
              }}
            >
              {button.Cor}
            </E.BtnEscolha>
        ))}
        </E.Dados>
    </div>

    <div>
      <E.LabelEstoque>Tamanhos</E.LabelEstoque>
      <E.Dados>
      {Data[selectedButtonColor].Tamanhos.map((Tamanhos, i) => (
          <E.BtnEscolha
            key={Tamanhos._id}
            onClick={() => (handleButtonTamanho(i))}
            style={{
              backgroundColor:  selectedButtonTamanho === i ? '#7688C9': 'unset',
            }}
          >
            {Tamanhos.Tamanho}
          </E.BtnEscolha>
        ))}
      </E.Dados>
    </div>
    
    <div>
      <E.LabelEstoque>Quantidade</E.LabelEstoque>
      <E.Dados>{(Data[selectedButtonColor].Tamanhos[selectedButtonTamanho].Quantidade)}</E.Dados>
    </div>
  </>
  )
}