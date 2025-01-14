import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Header from "./Header";
import router from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Header Component", () => {
  test("Renderiza os links corretamente e verifica as rotas", () => {
    router.push("/");

    render(<Header />);

    const links = screen.getAllByText("Lista de Tarefas");
    const taskListLink = links.find((link) => link.closest("a"));
    expect(taskListLink).toBeInTheDocument();
    expect(taskListLink.closest("a")).toHaveAttribute("href", "/");
  });
});
