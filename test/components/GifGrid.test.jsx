import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')


describe('GifItem Test', () => {
    const category = 'One Punch';
    test('should inicially show the loader', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });
    test('should show items when it charges the useFetchGifs images', () => {
        const gifs = [
            {id:'abc', title:'Saitama', url:'saitama.jpg'},
            {id:'abcd', title:'Gokú', url:'goku.jpg'},
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

    })
})