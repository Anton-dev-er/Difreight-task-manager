import React, { FC } from "react";
import { Badge } from "react-bootstrap";
import useTaskContext from "../../../hooks/UseTaskContext";
import { Task } from "../../../types/task.types";

interface Props {
  task: Task;
}

const TaskItem: FC<Props> = ({ task }) => {
  const { setEditingItemId, removeTask } = useTaskContext();
  return (
      <tr>
        <td width="20%">{task.name || "-"}</td>
        <td width="40%">{task.description || "-"}</td>
        <td width="15%">
          <Badge bg={task.status === "Виконано" ? "success" : "danger"}>
            {task.status}
          </Badge>
        </td>
        <td width="15%">
          {task.file?.name || "-"}
        </td>
        <td width="5%">
          <i className="bi bi-pen" onClick={() => setEditingItemId(task.id)}/>
        </td>
        <td width="5%">
          <i className="bi bi-trash" onClick={() => removeTask(task)}/>
        </td>
      </tr>
  );
};

export default TaskItem;