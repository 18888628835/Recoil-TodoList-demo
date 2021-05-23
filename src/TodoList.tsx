import "./styles.css";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoItem from "./components/TodoItem";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStatus from "./components/TodoListStatus";
import { filteredTodoListState } from "./store/Selector";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
      <TodoListFilters />
      <TodoListStatus />
    </div>
  );
}
