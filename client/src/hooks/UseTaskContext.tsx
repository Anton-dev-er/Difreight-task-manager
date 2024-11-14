import { useContext } from 'react';
import { TaskContext } from "../contexts/TaskContext";

const useTaskContext = () => useContext(TaskContext);

export default useTaskContext;