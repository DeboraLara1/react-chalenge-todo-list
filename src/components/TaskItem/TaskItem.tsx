import React from "react";
import InputForm from "../InputForm/InputForm";
import { InputTextArea } from "../InputTextArea/InputTextArea";
import ButtonForm from "../Button/Button";
import { FaEdit } from "react-icons/fa";

export default function TaskItem({
  task,
  index,
  toggleTaskCompletion,
  toggleEditMode,
  editTask,
  removeTask,
}: any) {
  return (
    <div
      key={index}
      className={`w-64 p-4 border rounded-lg shadow-md ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(index)}
          className="mr-2"
        />
        {task.isEditing ? (
          <InputForm
            placeholder="Encontre sua tarefa"
            value={task.text}
            onChange={(e) => editTask(index, { text: e.target.value })}
          />
        ) : (
          <span
            className={`flex-1 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.text}
          </span>
        )}
        <button
          onClick={() => toggleEditMode(index)}
          className="ml-2 text-blue-500 hover:text-blue-700"
        >
          <FaEdit />
        </button>
      </div>

      <InputTextArea
        placeholder="Descrição da tarefa"
        value={task.description || ""}
        onChange={(e) => editTask(index, { description: e.target.value })}
        className="mt-2 w-full p-2 border rounded-lg bg-gray-50"
        rows={3}
        readOnly={!task.isEditing}
      />
      <ButtonForm
        TitleButton="Remover tarefa"
        onClick={() => removeTask(index)}
        className="flex justify-center mb-3"
      />
    </div>
  );
}
