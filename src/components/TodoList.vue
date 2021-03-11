<template>
  <div class="todo-list-container">
    <div
      v-for="(todo, index) in todos"
      :key="index"
      class="todo-item-wrapper grid-container"
      :class="{ 'todo-item-complete': todo.completed }"
    >
      <button
        class="completed"
        name="complete-btn"
        @click.prevent="$emit('complete', todo)"
      >
        <span><font-awesome-icon :icon="['fas', 'check']"/></span>
      </button>
      <input
        type="text"
        class="todo-text"
        name="content"
        v-model="todo.content"
        :key="todo.id"
        @keyup.ctrl.delete="$emit('remove', todo)"
        @keyup.enter="$emit('complete', todo)"
      />
      <button
        class="remove-btn"
        name="remove-btn"
        @click.prevent="$emit('remove', todo)"
      >
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
