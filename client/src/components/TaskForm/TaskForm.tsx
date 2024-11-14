import React, { FC, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import useTaskContext from "../../hooks/UseTaskContext";
import { Task } from "../../types/task.types";

const mockTask: Task = {
  id: 0,
  name: "",
  description: "",
  status: "Невиконано",
  file: null
};

const TaskForm: FC = () => {
  const { addTask } = useTaskContext();
  const [task, setTask] = useState<Task>(mockTask);
  const ref = useRef<any>(null);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setTask({ ...task, [id]: value });
  };

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;

    setTask({ ...task, [id]: value });
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const id = event.target.id;
    const files = (event.target as HTMLInputElement).files;
    if (files && files[0]) {
      setTask({ ...task, [id]: files[0] });
    }
  };

  const onAdd = () => {
    task.id = Date.now();
    addTask(structuredClone(task));
    setTask(mockTask);
    ref.current.value = "";
  };

  return (
      <>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Назва</Form.Label>
          <Form.Control
              id="name"
              onChange={onChangeInput}
              value={task.name}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="description">Опис</Form.Label>
          <Form.Control
              id="description"
              as="textarea"
              rows={3}
              onChange={onChangeInput}
              value={task.description}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="status">Статус</Form.Label>
          <Form.Select
              id="status"
              onChange={onChangeSelect}
              value={task.status}
          >
            <option value="Виконано">Виконано</option>
            <option value="Невиконано">Невиконано</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="file">Файл</Form.Label>
          <Form.Control
              ref={ref}
              id="file"
              type="file"
              onChange={onChangeFile}
          />
        </Form.Group>
        <Button onClick={onAdd}>Додати</Button>
      </>
  );
};

export default TaskForm;