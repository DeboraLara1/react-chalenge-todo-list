import React, { createContext, useState, useEffect, useContext } from "react";
import { saveToLocalStorage, loadFromLocalStorage } from "../utils/storage"; // Importando as funções

// Criação do contexto
const TaskContext = createContext();

// Provedor do contexto
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [description, setDescription] = useState("");
  const [filterText, setFilterText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Persistindo os dados
  useEffect(() => {
    const savedTasks = loadFromLocalStorage("tasks");
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      saveToLocalStorage("tasks", tasks);
    }
  }, [tasks]);

  // Funções de manipulação de tarefas
  const addTask = () => {
    const newTaskObj = {
      text: newTask,
      description: description,
      completed: false,
      isEditing: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setDescription("");
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const toggleEditMode = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(updatedTasks);
  };

  const markAllAsCompleted = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      completed: true,
    }));
    setTasks(updatedTasks);
  };

  const removeCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.text.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((task) => {
      if (filterStatus === "completed") return task.completed;
      if (filterStatus === "pending") return !task.completed;
      return true;
    });

  return (
    <TaskContext.Provider
      value={{
        tasks,
        newTask,
        setNewTask,
        description,
        setDescription,
        filterText,
        setFilterText,
        filterStatus,
        setFilterStatus,
        addTask,
        removeTask,
        editTask,
        toggleTaskCompletion,
        toggleEditMode,
        markAllAsCompleted,
        removeCompletedTasks,
        filteredTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
