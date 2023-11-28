import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Task } from '../interface/Task';

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  addNewTask: (task: Task) => void;
}

const initialState = {
  title: '',
  description: '',
};

const TaskForm = ({ addNewTask }: Props) => {
  const [createTask, setCreateTask] = useState(initialState);

  const handleInputChange = (e: HandleInputChange) => {
    const { value, name } = e.target;
    setCreateTask({ ...createTask, [name]: value });
  };

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTask(createTask);
    setCreateTask(initialState);
  };

  return (
    <div className="card card-body ">
      <h1>Add Task</h1>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Write a Title"
          name="title"
          value={createTask.title}
          onChange={handleInputChange}
          className="text-white form-control mb-2 bg-transparent border-bottom rounded-0 shadow-none border-0"
        />
        <textarea
          name="description"
          rows={2}
          style={{ resize: 'none' }}
          placeholder="Write a Description"
          value={createTask.description}
          onChange={handleInputChange}
          className="text-white form-control mb-3 bg-transparent border-bottom shadow-none border-0 rounded-0 shadow-none"
        ></textarea>
        <button className="btn btn-success m-0 d-flex">
          <AiOutlinePlus />
          Save
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
