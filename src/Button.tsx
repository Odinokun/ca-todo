type PropsType = {
  title: string;
  callBack: () => void;
};

export const Button = ({ title, callBack }: PropsType) => {
  return <button onClick={callBack}>{title}</button>;
};
