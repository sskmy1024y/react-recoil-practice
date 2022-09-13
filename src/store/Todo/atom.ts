import {atom, atomFamily} from "recoil";
import {Todo} from "models/Todo";

/**
 * todoの配列をもつState
 */
export const todoListState = atom<Todo[]>({
  key: "TodoState",
  default: [] // 初期値は空配列
})
