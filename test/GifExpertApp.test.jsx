import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"
import React from "react";

describe('GifExpertApp', () => {
    const setCategories = jest.fn();
    test('should´nt execute set categories', () => {
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation((categories)=>[categories, setCategories])
        render(<GifExpertApp />)
        expect(setCategories).not.toBeCalled();
    })
    
    test('should setCategories runs', () => { 
        const categories = ['Saitama']
        const useStateSpy = jest.spyOn(React, "useState");
        render(<GifExpertApp />)
        useStateSpy.mockImplementation(()=>[categories, setCategories])
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: categories[0] } });
        fireEvent.submit(form);
        expect(setCategories).toBeCalled();
     })
})