import { TaskType } from './App';
import { Button } from './Button';

type PropsType = {
  title: string;
  tasks?: TaskType[];
  date?: string;
  removeTask: (taskId: number) => void;
};

export const Todolist = ({ title, tasks, date, removeTask }: PropsType) => {
  const onClickHandler = (id: number) => {
    removeTask(id);
  };

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title='+' callBack={() => {}} />
      </div>
      <br />

      <div>
        <Button title='All' callBack={() => {}} />
        <Button title='Active' callBack={() => {}} />
        <Button title='Completed' callBack={() => {}} />
      </div>

      <ul>
        {tasks ? (
          tasks.map(t => (
            <li key={t.id}>
              <Button title='del' callBack={() => onClickHandler(t.id)} />
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
