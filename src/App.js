import "./styles.css";
import { RecoilRoot } from "recoil";
import TodoList from "./TodoList";
//需要引入RecoilRoot包围组件
export default function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}
