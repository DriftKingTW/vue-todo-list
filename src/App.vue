<template>
  <div class="todo-wrapper">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Todo List</h1>
    <todo-input></todo-input>

    <div class="control-bar">
      <input type="button" class="ctrl-btn complete-only" value="Completed Only" />
      <input
        type="button"
        class="ctrl-btn uncomplete-only"
        value="Uncompleted Only"
      />
      <input type="button" class="ctrl-btn show-all" value="Show All Todos" />
      <input type="button" class="ctrl-btn clear-complete" value="Clear Completed" />
    </div>

    <span class="hint">Hint: Click text to edit!</span>

    <todo-item></todo-item>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoItem from "./components/TodoItem.vue";
import "@/assets/style.scss";

export default {
  name: "App",
  components: {
    TodoInput,
    TodoItem
  }
};
</script>
