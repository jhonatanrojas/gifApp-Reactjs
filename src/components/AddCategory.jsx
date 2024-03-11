import { useState, useEffect } from "react";

export const AddCategory = ({ onNewCaregory }) => {

    const [inputValue, setImputValue] = useState('')

    const onImputChange = (event) => {
            setImputValue(event.target.value)

    }

    const onSubmit = (event) => {
       event.preventDefault();

       if(inputValue.trim().length <= 1) return;

       onNewCaregory(inputValue.trim());
    //   onAddCategory( categories =>[inputValue,...categories]);   
       setImputValue('');
    }

  return (

    <form onSubmit={(e) => onSubmit(e) }>
       <input 
    type="text" 
    placeholder="Buscar gifa"
    value={inputValue}
    onChange={ onImputChange}
    />
    </form>
 
  )

};
