import React from "react";
import  InputForm  from "../InputForm/InputForm";
import { InputTextArea } from "../InputTextArea/InputTextArea";
import  ButtonForm  from "../Button/Button";

export default function NewTask(
  {newTask,
  setNewTask,
  description,
  setDescription,
  addTask}: any
) {
  return (
    <>
      <InputForm
        placeholder="Título da tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
       className="mt-0 w-[100%] "
      />
      <InputTextArea
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-2 w-[100%] p-2 border rounded-lg bg-gray-50"
      />
      <ButtonForm
        TitleButton="Adicionar"
        onClick={addTask}
        className="flex justify-end mb-3 mt-5 "
      />
    </>
  );
}
