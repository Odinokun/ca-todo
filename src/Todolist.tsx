import { Button } from './Button';

type PropsType = {
  title: string;
  tasks?: TaskType[];
  date?: string;
};

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

export const Todolist = ({ title, tasks, date }: PropsType) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title='+' />
      </div>
      <ul>
        {tasks ? (
          tasks.map(t => (
            <li key={t.id}>
              <input type='checkbox' checked={t.isDone} />
              <span>{t.title}</span>
            </li>
          ))
        ) : (
          <li>We have no tasks</li>
        )}
      </ul>
      <div>
        <Button title='All' />
        <Button title='Active' />
        <Button title='Completed' />
      </div>
      <div>{date} </div>
    </div>
  );
};
