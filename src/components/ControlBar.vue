<template>
  <div class="control-bar">
    <input
      type="button"
      class="ctrl-btn complete-only"
      value="Completed Only"
      @click="$emit('customizeFilter', 'Completed')"
    />
    <input
      type="button"
      class="ctrl-btn uncomplete-only"
      value="Uncompleted Only"
      @click="$emit('customizeFilter', 'Uncompleted')"
    />
    <input
      type="button"
      class="ctrl-btn show-all"
      value="Show All Todos"
      @click="$emit('customizeFilter', 'ShowAll')"
    />
    <input
      type="button"
      class="ctrl-btn clear-complete"
      value="Clear Completed"
      @click="$emit('clearCompleted')"
    />
  </div>
</template>

<script>
export default {
  name: "control-bar"
};
</script>
