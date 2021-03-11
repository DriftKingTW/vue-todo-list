<template>
  <div class="todo-list-container">
    <div
      v-for="(todo, index) in todos"
      :key="index"
      class="todo-item-wrapper grid-container"
    >
      <button class="completed" name="complete-btn">
        <span><font-awesome-icon :icon="['fas', 'check']"/></span>
      </button>
      <input
        type="text"
        class="todo-text"
        name="content"
        v-model="todo.content"
        :key="todo.id"
      />
      <button class="remove-btn" name="remove-btn">
        <span><font-awesome-icon :icon="['fas', 'times-circle']"/></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
};
</script>
