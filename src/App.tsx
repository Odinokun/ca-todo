import { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Rest API', isDone: false },
    { id: 5, title: 'GraphQL', isDone: false },
  ]);

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  return (
    <div className='App'>
      <Todolist
        title='What to learn'
        tasks={tasks}
        date={new Date().toLocaleDateString()}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
