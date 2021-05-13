import React, {useState} from 'react'

export const AddCategory = () => {

    const [InputValue, setInputValue] = useState('Hola Mundo');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Submit hecho');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{InputValue}</h2>
            <input 
            type="text"
            value={InputValue}
            onChange={handleInputChange}
            />
        </form>
    )
}
