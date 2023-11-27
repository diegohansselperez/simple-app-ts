import { useState } from 'react';
import './App.css';
import icon from '../src/assets/react.svg';
import { Task } from '../src/interface/Task.ts';
import TaskList from './components/TaskList.tsx';
import TaskForm from './components/TaskForm.tsx';

interface Props {
  title?: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'React and Typescript',
      description: 'Learn and reading React and Typescript',
      completed: false,
    },
    {
      id: 2,
      title: 'React and Typescript',
      description: 'Learn and reading React and Typescript',
      completed: false,
    },
    {
      id: 3,
      title: 'React and Typescript',
      description: 'Learn and reading React and Typescript',
      completed: false,
    },
    {
      id: 4,
      title: 'React and Typescript',
      description: 'Learn and reading React and Typescript',
      completed: false,
    },
  ]);

  return (
    <>
      <nav className="navbar bg-success text-light">
        <div className="container d-flex justify-content-start gap-2">
          {' '}
          <img src={icon} alt="icon" />
          <h2 className="text-light p-0 m-0">
            {title ? title : 'Simple React App'}
          </h2>
        </div>
      </nav>
      <div className="">
        <main className="container p-4">
          <div className="row">
            <div className="col-md-4">
              <TaskForm />
            </div>
            <div className=" col-md-8">
              <div className="d-flex row">
                <TaskList tasks={tasks} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
