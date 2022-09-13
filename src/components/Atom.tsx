import { Todo } from "models/Todo";
import { useRecoilState } from "recoil";
import { todoListState } from "store/Todo/atom";

export const ExampleAtom = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleAddTodo = () => {
    const newTodo: Todo = {
      id: `${Date.now()}`,
      title: `${Date.now()}`,
      done: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
  };

  return (
    <div>
      <button onClick={handleAddTodo}>{"Add tasks"}</button>
      <div>
        {todoList.map((todo, index) => {
          return <div key={index}>{`${todo.title}`}</div>;
        })}
      </div>
    </div>
  );
};
