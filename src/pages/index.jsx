import { useTasks } from "../context/TaskContext";
import styles from "./App.module.css";
import Header from "../components/Header/Header";
import Filter from "../components/Filters/Filters";
import NewTask from "../components/NewTask/NewTask";
import TaskList from "../components/TaskList/TaskList";
import ButtonIcon from "../components/buttonIcon/buttonIcon";
import { FaCheck, FaTrash } from "react-icons/fa";

export default function Home() {
  const {
    newTask,
    setNewTask,
    description,
    setDescription,
    filterText,
    setFilterText,
    setFilterStatus,
    filteredTasks,
    addTask,
    markAllAsCompleted,
    removeCompletedTasks,
    removeTask,
    toggleTaskCompletion,
    toggleEditMode,
    editTask, // A função editTask está disponível aqui
  } = useTasks();

  return (
    <div className={styles.body}>
      <Header />
      <div
        className={`mx-auto mt-10 p-5 border rounded-lg shadow-lg ${styles.createTask}`}
      >
        <h1 className="text-2xl font-bold mb-5">Adicionar tarefa</h1>

        <div className="mb-5">
          <NewTask
            newTask={newTask}
            setNewTask={setNewTask}
            description={description}
            setDescription={setDescription}
            addTask={addTask}
          />

          <h1 className="text-2xl font-bold mb-5">Lista de tarefas</h1>
          <Filter
            filterText={filterText}
            setFilterText={setFilterText}
            setFilterStatus={setFilterStatus}
          />
          <div className={`flex justify-end mb-4 ${styles.contentButton}`}>
            <ButtonIcon
              onClick={markAllAsCompleted}
              TitleButton="Marcar todas como concluídas"
              className={`flex items-center mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out ${styles.button}`}
              Icon={FaCheck}
            />
            <ButtonIcon
              onClick={removeCompletedTasks}
              TitleButton="Excluir tarefas concluídas"
              className={`flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-200 ease-in-out ${styles.button}`}
              Icon={FaTrash}
            />
          </div>
          <TaskList
            tasks={filteredTasks}
            toggleTaskCompletion={toggleTaskCompletion}
            toggleEditMode={toggleEditMode}
            editTask={editTask} // Passando editTask para o TaskList
            removeTask={removeTask}
          />
        </div>
      </div>
    </div>
  );
}
