import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Filter from "./Filters";

describe("Filter Component", () => {
  const mockSetFilterText = jest.fn();
  const mockSetFilterStatus = jest.fn();

  beforeEach(() => {
    render(
      <Filter
        filterText=""
        setFilterText={mockSetFilterText}
        setFilterStatus={mockSetFilterStatus}
      />
    );
  });

  test("Renderiza o campo de pesquisa", () => {
    const inputElement = screen.getByPlaceholderText("Pesquise uma tarefa");
    expect(inputElement).toBeInTheDocument();
  });

  test("Atualiza o texto do filtro quando o valor é alterado", () => {
    const inputElement = screen.getByPlaceholderText("Pesquise uma tarefa");
    fireEvent.change(inputElement, { target: { value: "Nova tarefa" } });
    expect(mockSetFilterText).toHaveBeenCalledWith("Nova tarefa");
  });

  test("Renderiza o seletor de status", () => {
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
  });

  test("Atualiza o status do filtro quando o valor é alterado", () => {
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "completed" } });
    expect(mockSetFilterStatus).toHaveBeenCalledWith("completed");
  });
});
