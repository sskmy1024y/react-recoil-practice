import { useRecoilValue } from "recoil";
import { doneTodoListSelector } from "store/Todo/selector";

export const Selector = () => {
  const todoList = useRecoilValue(doneTodoListSelector);

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
