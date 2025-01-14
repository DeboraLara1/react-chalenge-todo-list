import React from "react";
import  TaskItem  from "../TaskItem/TaskItem";

export default function TaskList({
  tasks,
  toggleTaskCompletion,
  toggleEditMode,
  editTask,
  removeTask,
}: any) {

    
  return (
    <div className="flex w-(6.4%) justify-around flex-wrap gap-4 listTask">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTaskCompletion={toggleTaskCompletion}
          toggleEditMode={toggleEditMode}
          editTask={editTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}
