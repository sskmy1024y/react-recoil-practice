import { useDoneTodoList } from "store/Todo";

export const Selector = () => {
  const todoList = useDoneTodoList();

  return (
    <div>
      <h3>{"selectorでフィルタする場所"}</h3>
      <p>doneのタスクだけ表示する</p>

      <div>
        <span>フィルタ結果↓</span>
        {todoList.map((todo, index) => {
          return <div key={index}>{`${todo.title}`}</div>;
        })}
      </div>
    </div>
  );
};
