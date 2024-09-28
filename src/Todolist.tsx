type PropsType = {
  title: string;
  tasks: TaskType[];
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
        <button>+</button>
      </div>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <input type='checkbox' checked={t.isDone} />
            <span>{t.title}</span>
          </li>
        ))}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>{date} </div>
    </div>
  );
};
