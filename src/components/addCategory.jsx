import { useState } from "react"

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue ] = useState('');
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        setCategories(inputValue.trim())
         event.target[0].value = '';
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                onChange={event => onInputChange(event)}
            />
        </form>
    )
}
