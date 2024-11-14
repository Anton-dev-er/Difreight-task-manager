import React, { FC } from "react";
import { Form } from "react-bootstrap";
import useTaskContext from "../../../hooks/UseTaskContext";
import { Task } from "../../../types/task.types";
import "./TaskEditingItem.css";

interface Props {
  task: Task;
}

const TaskEditingItem: FC<Props> = ({ task }) => {
  const { setEditingItemId, removeTask, editTask } = useTaskContext();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    editTask({ ...task, [id]: value });
  };

  const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;

    editTask({ ...task, [id]: value });
  };

  const onChangeFile = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const id = event.target.id;
    const files = (event.target as HTMLInputElement).files;
    if (files && files[0]) {
      editTask({ ...task, [id]: files[0] });
    }
  };

  return (
      <tr>
        <td width="20%">
          <Form.Control
              id="name"
              onChange={onChangeInput}
              value={task.name}
          />
        </td>
        <td width="40%">
          <Form.Control
              id="description"
              as="textarea"
              rows={3}
              onChange={onChangeInput}
              value={task.description}
          />
        </td>
        <td width="15%">
          <Form.Select
              id="status"
              onChange={onChangeSelect}
              value={task.status}
          >
            <option value="Виконано">Виконано</option>
            <option value="Невиконано">Невиконано</option>
          </Form.Select>
        </td>
        <td width="15%">
          <Form.Control
              id="file"
              type="file"
              onChange={onChangeFile}
              className="task-file"
          />
          <Form.Label htmlFor="file">{task.file?.name}</Form.Label>
        </td>
        <td width="5%">
          <i className="bi bi-check" onClick={() => setEditingItemId(0)}/>
        </td>
        <td width="5%">
          <i className="bi bi-trash" onClick={() => removeTask(task)}/>
        </td>
      </tr>
  );
};

export default TaskEditingItem;