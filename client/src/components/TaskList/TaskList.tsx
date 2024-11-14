import React, { FC } from "react";
import { Table } from "react-bootstrap";
import useTaskContext from "../../hooks/UseTaskContext";
import "./TaskList.css";
import TaskEditingItem from "./TaskEditingItem/TaskEditingItem";
import TaskItem from "./TaskItem/TaskItem";

const TaskList: FC = () => {
  const { taskList, editingItemId } = useTaskContext();

  return (
      <>
        <Table striped borderless hover>
          <thead>
          <tr>
            <th>Назва</th>
            <th>Опис</th>
            <th>Статус</th>
            <th>Файл</th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {taskList.map((task) => (
              editingItemId === task.id
                  ? <TaskEditingItem key={task.id} task={task}/>
                  : <TaskItem key={task.id} task={task}/>
          ))}
          </tbody>
        </Table>
      </>
  );
};

export default TaskList;