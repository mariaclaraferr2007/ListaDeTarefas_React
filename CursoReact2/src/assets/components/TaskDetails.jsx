import React from "react";
import Button from "./Button";
import { useParams, useNavigate } from "react-router-dom";
import "./TaskDetails.css";
import Header from "./Header";

const TaskDetails = ({ tasks }) => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === taskId);

  if (!task) return <p>Tarefa não encontrada.</p>;

  return (
    <>
      <Header>Minhas Tarefas</Header>
      <div className="back-button-container">
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h1>{task.title}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          minima eius magnam culpa sequi explicabo.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
