import { TaskType } from './App';
import { Button } from './Button';

type PropsType = {
  title: string;
  tasks?: TaskType[];
  date?: string;
};

export const Todolist = ({ title, tasks, date }: PropsType) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title='+' />
      </div>
      <br />

      <div>
        <Button title='All' />
        <Button title='Active' />
        <Button title='Completed' />
      </div>

      <ul>
        {tasks ? (
          tasks.map(t => (
            <li key={t.id}>
              <button>del</button>
              <input type='checkbox' checked={t.isDone} />
              <span>{t.title}</span>
            </li>
          ))
        ) : (
          <li>We have no tasks</li>
        )}
      </ul>

      {date ? <div>Current date - {date} </div> : null}
    </div>
  );
};
