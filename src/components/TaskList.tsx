import { Task } from '../interface/Task';
import TaskCard from './TaskCard';

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
}

const TaskList = ({ tasks, deleteTask }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard task={task} deleteTask={deleteTask} />
      ))}
    </>
  );
};

export default TaskList;
