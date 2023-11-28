import { Task } from '../interface/Task';

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

const TaskCard = ({ task, deleteTask }: Props) => {
  return (
    <>
      <div key={task.id} className="card card-body w-25">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <button
          onClick={() => task.id && deleteTask(task.id)}
          className="w-50 btn btn-danger"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TaskCard;
