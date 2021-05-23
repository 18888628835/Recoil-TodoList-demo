import { todoListState, todoListFilterState } from "./Atom";
import { selector } from "recoil";
//这个文件用来放派生数据，派生数据就是用仓库数据进行某些操作而得出的数据
//派生数据，可以获取到仓库中的多个数据，实现派生
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    //这里的派生数据主要是根据 filter 值和 todoList 值进行过滤数据
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  }
});

//派生数据，可以获取到仓库中的单个数据，实现派生
export const todoListStatusState = selector({
  key: "todoListStatusState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted
    };
  }
});
