import { Todo } from "models/Todo";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTodoList } from "store/Todo";

export const ExampleAtom = () => {
  const [todoList, setTodoList] = useTodoList();
  const [input, setInput] = useState("");

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: `${Date.now()}`,
      title: input,
      done: false,
    };

    setInput("");
    setTodoList((prev) => [...prev, newTodo]);
  };

  const handleCheck = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          done: e.target.checked,
        };
      })
    );
  };

  return (
    <div>
      <h3>Atomで管理してる場所</h3>
      <p>配列で管理してる</p>
      <form onSubmit={handleAddTodo}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <input type="submit" value={"Add tasks"} />
      </form>
      <br />
      <div>
        <table border={1}>
          <tr>
            <th></th>
            <th>タイトル</th>
          </tr>
          {todoList.map((todo, index) => {
            return (
              <tr key={index}>
                <td>
                  {
                    <input
                      type="checkbox"
                      onChange={handleCheck(todo.id)}
                      checked={todo.done}
                    />
                  }
                </td>
                <td>{`${todo.title}`}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
