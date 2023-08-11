import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/addCategory";

describe('addCategory test', () => {

    const inputValue = 'Saitama';
    const setCategory = jest.fn();
    test('shouldn´t call setCategory if input is empty', () => {
        
        render(<AddCategory setCategories={setCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(setCategory).not.toBeCalled()
    });

    test('should change the texbox', () => {
        render(<AddCategory setCategories={setCategory} />);
        //extraemos el input
        const input = screen.getByRole('textbox');
        //ejecutamos el evento
        fireEvent.input(input, { target: { value: inputValue } });
        //validamos lo que queremos que haga
        expect(input.value).toBe(inputValue)
    });


    test('should call setCategories if the input have a value', () => {
        render(<AddCategory setCategories={setCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(setCategory).toHaveBeenCalled();
        expect(setCategory).toHaveBeenCalledTimes(1);
        expect(setCategory).toHaveBeenCalledWith(inputValue);


    });

});