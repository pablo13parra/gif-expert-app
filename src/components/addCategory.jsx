import { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setCategories(inputValue.trim())
        setInputValue('');
    }
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }
    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={event => onInputChange(event)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}