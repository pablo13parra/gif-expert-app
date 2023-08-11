import { render, screen } from '@testing-library/react';
import GifItem from '../../src/components/GifItem';

describe('GiftItem test', () => {
    const image = {
        title: 'Saitama',
        url: 'https://one-punch.com/saitama.jpg',
        id: '0'
    }
    test('should match with snapshot', () => {
        const { container } = render(<GifItem key={image.id} {...image} />);
        expect(container).toMatchSnapshot();
    });

    test('should show the alt and url correctly', () => {
        render(<GifItem key={image.id} {...image} />);
        const { src, alt } = screen.getByRole('img');
        //ver que es lo que estoy renderizando
        // screen.debug();
        expect(src).toBe(image.url);
        expect(alt).toBe('altxd');
    });

    test('should show the title on the component', () => { 
        render(<GifItem key={image.id} {...image} />);
        const cardTitle = screen.getByRole('heading', {level:4})
        const content = cardTitle.textContent;
        expect(content).toBeTruthy();
        expect(content).toContain(image.title)
        // expect(screen.getByRole('h4'))
     })

})