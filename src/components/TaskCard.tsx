import { Task } from '../interface/Task';

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  return (
    <>
      <div key={task.id} className="card card-body w-25">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <button className=" w-50 btn btn-danger">Delete</button>
      </div>
    </>
  );
};

export default TaskCard;
