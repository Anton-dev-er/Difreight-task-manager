import "./App.css";
import React from "react";
import { Card, Container } from "react-bootstrap";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";


function App() {
  return (
      <Container>
        <h1>Менеджер завдань</h1>
        <Card body className="mb-3">
          <h2>Нове завдання</h2>
          <TaskForm />
        </Card>

        <Card body>
          <h2>Список завдання</h2>
          <TaskList />
        </Card>
      </Container>

  );
}

export default App;
