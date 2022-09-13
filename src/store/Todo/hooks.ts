import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "./atom";
import { doneTodoListSelector, searchedTodoListSelector } from "./selector";

export const useTodoList = () => {
  return useRecoilState(todoListState);
};

export const useDoneTodoList = () => {
  const doneTodoList = useRecoilValue(doneTodoListSelector);
  return doneTodoList;
};

export const useSearchedTodoList = (startTitle: string) => {
  const searchedTodoList = useRecoilValue(searchedTodoListSelector(startTitle));
  return searchedTodoList;
};
