import React, { useState } from "react";
import "./App.css";
import Tasks from "./assets/components/Tasks";
import AddTask from "./assets/components/AddTask";
import { v4 as uuidv4 } from "uuid";
import Header from "./assets/components/Header";
import { Route, Routes } from "react-router-dom";
import TaskDetails from "./assets/components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar",
      completed: false,
    },
    {
      id: "2",
      title: "Escrever",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div className="container fundo">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header>Lista de Tarefas</Header>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          }
        />
        <Route
          path="/detalhes/:taskId"
          element={<TaskDetails tasks={tasks} />}
        />
      </Routes>
    </div>
  );
};

export default App;
