import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonIcon from "./ButtonIcon"; 
import '@testing-library/jest-dom';
import { FaPlus } from "react-icons/fa"; 

describe("ButtonIcon Component", () => {
  test("Renderiza o título do botão corretamente", () => {
    render(<ButtonIcon TitleButton="Adicionar" />);
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  test("Renderiza o ícone corretamente quando fornecido", () => {
    render(<ButtonIcon Icon={FaPlus} TitleButton="Adicionar" />);
    const iconElement = screen.getByTestId("button-icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("Chama a função onClick ao clicar no botão", () => {
    const handleClick = jest.fn();
    render(
      <ButtonIcon
        onClick={handleClick}
        TitleButton="Adicionar"
        Icon={FaPlus}
      />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
