import React, { useState } from 'react';
import {useForm ,useFieldArray} from 'react-hook-form'


// export default function Inicio(){

//     return(
//       <>
      
//         <Container>
//           <FileInput type="file" id="file" />
//           <CustomFileLabel htmlFor="file">Escolher arquivo</CustomFileLabel>
//         </Container>
//         <SScrollCard>
//             <Card>sim</Card>
//             <Card>sim</Card>
//             <Card>sim</Card>
//             <Card>sim</Card>
//             <Card>sim</Card>
//             <Card>sim</Card>
//         </SScrollCard>
//       </>
//     )
    
//   }

function Inicio() {
  const [formUpdated, setFormUpdated] = useState(0);
  const { control, handleSubmit, register } = useForm();
  const { fields: clothes, append, remove } = useFieldArray({
    control,
    name: 'clothes',
  });

  const addCloth = () => {
    append({
      id: '',
      value: '',
      colors: [],
    });
  };

  const removeCloth = (index) => {
    remove(index);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const addColor = (clothIndex) => {
    clothes[clothIndex].colors.push({ sizeQuantities: [] });
    setFormUpdated(formUpdated + 1);
  };

  const removeColor = (clothIndex, colorIndex) => {
    clothes[clothIndex].colors.splice(colorIndex, 1);
    setFormUpdated(formUpdated + 1);
  };

  const addSize = (clothIndex, colorIndex) => {
    const newSize = { size: '', quantity: '' };
    register(`clothes[${clothIndex}].colors[${colorIndex}].sizeQuantities[${clothes[clothIndex].colors[colorIndex].sizeQuantities.length}]`, {
      value: newSize,
    })

    clothes[clothIndex].colors[colorIndex].sizeQuantities.push(newSize);
    setFormUpdated(formUpdated + .5);
  };

  const removeSize = (clothIndex, colorIndex, sizeIndex) => {
    clothes[clothIndex].colors[colorIndex].sizeQuantities.splice(sizeIndex, 1);
    setFormUpdated(formUpdated + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {clothes.map((cloth, clothIndex) => (
        <div key={cloth.id}>
          <h2>Cloth {clothIndex + 1}</h2>
          <input {...register(`clothes[${clothIndex}].id`)} placeholder="ID" />
          <input {...register(`clothes[${clothIndex}].value`)} placeholder="Value" />

          {cloth.colors.map((color, colorIndex) => (
            <div key={colorIndex}>
              <h3>Color {colorIndex + 1}</h3>
              <button type="button" onClick={() => removeColor(clothIndex, colorIndex)}>
                Remove Color
              </button>
              <button type="button" onClick={() => addSize(clothIndex, colorIndex)}>
                Add Size
              </button>

              {color.sizeQuantities.map((sizeQuantity, sizeIndex) => (
                <div key={sizeIndex}>
                  <input
                    {...register(`clothes[${clothIndex}].colors[${colorIndex}].sizeQuantities[${sizeIndex}].size`)}
                    placeholder="Size"
                  />
                  <input
                    {...register(`clothes[${clothIndex}].colors[${colorIndex}].sizeQuantities[${sizeIndex}].quantity`)}
                    placeholder="Quantity"
                  />
                  <button type="button" onClick={() => removeSize(clothIndex, colorIndex, sizeIndex)}>
                    Remove Size
                  </button>
                </div>
              ))}
            </div>
          ))}
          <button type="button" onClick={() => addColor(clothIndex)}>
            Add Color
          </button>
          <button type="button" onClick={() => removeCloth(clothIndex)}>
            Remove Cloth
          </button>
        </div>
      ))}

      <button type="button" onClick={addCloth}>
        Add Cloth
      </button>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Inicio;
