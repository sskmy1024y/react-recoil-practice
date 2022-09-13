import { useState } from "react";
import { useRecoilValue } from "recoil";
import { searchedTodoListSelector } from "store/Todo/selector";

export const SelectorFamily = () => {
  const [input, setInput] = useState("");
  const todoList = useRecoilValue(searchedTodoListSelector(input));

  return (
    <div>
      <h3>{"selectorFamilyでフィルタする場所"}</h3>
      <p>atomをフィルタする</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <div>
        <span>フィルタ結果↓</span>
        {todoList.map((todo, index) => {
          return <div key={index}>{`${todo.title}`}</div>;
        })}
      </div>
    </div>
  );
};
