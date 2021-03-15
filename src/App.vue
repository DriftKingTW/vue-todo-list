<template>
  <div class="todo-wrapper">
    <fork-me></fork-me>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Todo List</h1>
    <todo-input @todo-submitted="createTodo"></todo-input>

    <div class="control-bar">
      <input
        type="button"
        class="ctrl-btn complete-only"
        value="Completed Only"
        @click="customizeFilter('Completed')"
      />
      <input
        type="button"
        class="ctrl-btn uncomplete-only"
        value="Uncompleted Only"
        @click="customizeFilter('Uncompleted')"
      />
      <input
        type="button"
        class="ctrl-btn show-all"
        value="Show All Todos"
        @click="customizeFilter('ShowAll')"
      />
      <input
        type="button"
        class="ctrl-btn clear-complete"
        value="Clear Completed"
        @click="clearCompleted"
      />
    </div>

    <span class="hint">Hint: Click text to edit!</span>

    <todo-list
      v-if="todos.length"
      :todos="todos"
      @remove="removeTodo"
      @complete="completeTodo"
    ></todo-list>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import ForkMe from "./components/ForkMe.vue";
import "@/assets/style.scss";

let nextId = 0;

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList,
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
      const trimmedContent = todoContent.trim();
      if (trimmedContent) {
        const todo = {
          id: nextId,
          content: trimmedContent,
          completed: false,
          show: true
        };
        this.todos = [...this.todos, todo];
        nextId++;
      }
    },
    completeTodo(target) {
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
