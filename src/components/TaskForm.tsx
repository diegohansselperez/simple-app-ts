import { AiOutlinePlus } from 'react-icons/ai';

const TaskForm = () => {
  return (
    <div className="card card-body ">
      <h1>Add Task</h1>
      <form action="">
        <input
          type="text"
          placeholder="Write a Title"
          name="title"
          className="text-white form-control mb-2 bg-transparent border-bottom rounded-0 shadow-none border-0"
        />
        <textarea
          name="description"
          rows={3}
          placeholder="Write a Description"
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
