import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonForm from './Button';

describe('ButtonForm Component', () => {
  test('Renderiza o botão com o título correto', () => {
    render(<ButtonForm TitleButton="Clique Aqui" />);
    
    expect(screen.getByRole('button', { name: /clique aqui/i })).toBeInTheDocument();
  });

  test('Aciona o evento onClick corretamente', () => {
    const handleClick = jest.fn(); 
    render(<ButtonForm TitleButton="Clique Aqui" onClick={handleClick} />);
   
    const button = screen.getByRole('button', { name: /clique aqui/i });
    
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Adiciona a classe personalizada corretamente', () => {
    render(<ButtonForm TitleButton="Clique Aqui" className="custom-class" />);
    
    expect(screen.getByText(/clique aqui/i).parentElement).toHaveClass('custom-class');
  });
});
