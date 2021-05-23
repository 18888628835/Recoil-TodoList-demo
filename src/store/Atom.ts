import { atom } from "recoil";

//这个文件是用来创建原子数据仓库的,这个 demo 一共保存两个数据
//1.todoList的数据
//2.todoListFilter的数据

export const todoListState = atom({
  key: "todoListState",
  default: []
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All"
});
