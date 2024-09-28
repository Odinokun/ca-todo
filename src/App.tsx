import './App.css';
import { Todolist } from './Todolist';

function App() {
  const tasks1 = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Rest API', isDone: false },
    { id: 5, title: 'GraphQL', isDone: false },
  ];

  const tasks2 = [
    { id: 1, title: 'milk', isDone: true },
    { id: 2, title: 'bread', isDone: false },
    { id: 3, title: 'sugar', isDone: false },
  ];

  return (
    <div className='App'>
      <Todolist title='What to learn' tasks={tasks1} date='11/11/2024' />
      <Todolist title='What to buy' tasks={tasks2} />
    </div>
  );
}

export default App;
