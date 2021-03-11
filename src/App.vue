<template>
  <div class="todo-wrapper">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Todo List</h1>
    <todo-input @todo-submitted="createTodo"></todo-input>

    <div class="control-bar">
      <input
        type="button"
        class="ctrl-btn complete-only"
        value="Completed Only"
      />
      <input
        type="button"
        class="ctrl-btn uncomplete-only"
        value="Uncompleted Only"
      />
      <input type="button" class="ctrl-btn show-all" value="Show All Todos" />
      <input
        type="button"
        class="ctrl-btn clear-complete"
        value="Clear Completed"
      />
    </div>

    <span class="hint">Hint: Click text to edit!</span>

    <todo-list v-if="todos.length" :todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import "@/assets/style.scss";

let nextId = 0;

export default {
  name: "App",
  components: {
    TodoInput,
    TodoList
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    createTodo(todoContent) {
      const trimmedContent = todoContent.trim();
      if (trimmedContent) {
        const todo = {
          id: nextId,
          content: trimmedContent,
          completed: false
        };
        this.todos.push(todo);
        nextId++;
      }
    }
  }
};
</script>
