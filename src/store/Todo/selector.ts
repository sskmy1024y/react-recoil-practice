import { Todo } from "models/Todo";
import { selectorFamily } from "recoil";
import { todoListState } from "store/Todo/atom";

export const searchedTodoListSelector = selectorFamily<Todo[], string>({
  key: "searchedTodoListSelector",
  // getは{ get }を引数に取る関数
  get:
    (startTitle: string) =>
    ({ get }) => {
      // 引数のgetを使ってAtomから最新の値を取得(タスク一覧)
      const todoList: Todo[] = get(todoListState);
      // 引数の検索文字を使って検索
      // 検索フィールドに入力がある場合は、その条件に合致したタスクのみを返却する
      return todoList.filter((t) => t.title.startsWith(startTitle));
    },
});
