import { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Rest API', isDone: false },
    { id: 5, title: 'GraphQL', isDone: false },
  ]);
  const [filter, setFilter] = useState<FilterValuesType>('all');

  let filteredTasks = tasks;
  if (filter === 'active') {
    filteredTasks = tasks.filter(t => !t.isDone);
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(t => t.isDone);
  }

  const filterTasks = (filter: FilterValuesType) => setFilter(filter);

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  return (
    <div className='App'>
      <Todolist
        title='What to learn'
        tasks={filteredTasks}
        date={new Date().toLocaleDateString()}
        filterTasks={filterTasks}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
