<template>
  <div class="todo-wrapper">
    <fork-me></fork-me>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Todo List</h1>
    <todo-input @todo-submitted="createTodo"></todo-input>

    <control-bar
      @customizeFilter="customizeFilter"
      @clearCompleted="clearCompleted"
    ></control-bar>

    <span class="hint">Hint: Click text to edit!</span>

    <todo-list
      v-if="todos.length"
      :todos="todos"
      @remove="removeTodo"
      @complete="toggleTodo"
    ></todo-list>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import ControlBar from "./components/ControlBar.vue";
import ForkMe from "./components/ForkMe.vue";
import { v4 as uuidv4 } from "uuid";
import "@/assets/style.scss";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
    ControlBar,
    ForkMe
  },
  data() {
    return {
      todos: []
    };
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (e) {
        localStorage.removeItem("todos");
      }
    }
  },
  methods: {
    createTodo(todoContent) {
      const todo = {
        id: uuidv4(),
        content: todoContent,
        completed: false,
        show: true
      };
      this.todos = [...this.todos, todo];
    },
    toggleTodo(target) {
      const orginalStatus = target.completed;
      this.todos = this.todos.map(todo =>
        todo === target ? { ...todo, completed: !orginalStatus } : todo
      );
    },
    removeTodo(target) {
      this.todos = this.todos.filter(todo => todo !== target);
    },
    saveTodos() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => todo.completed !== true);
    },
    customizeFilter(arg) {
      if (arg === "Completed") {
        this.todos = this.todos.map(todo =>
          todo.completed === false
            ? { ...todo, show: false }
            : { ...todo, show: true }
        );
      }
      if (arg === "Uncompleted") {
        this.todos = this.todos.map(todo =>
          todo.completed === true
            ? { ...todo, show: false }
            : { ...todo, show: true }
        );
      }
      if (arg === "ShowAll") {
        this.todos = this.todos.map(todo =>
          todo.show === false ? { ...todo, show: true } : todo
        );
      }
    }
  },
  watch: {
    todos() {
      this.saveTodos();
    }
  }
};
</script>
