import { useRecoilState } from "recoil";
import { todoListFilterState } from "../store/Atom";

//设置 filter 数据
function TodoListFilters() {
  //这里需要读写数据，所以用useRecoilState
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
export default TodoListFilters;
