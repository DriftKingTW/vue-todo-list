<template>
  <div class="todo-item-wrapper grid-container todo-item-">
    <button class="completed">
      <span><font-awesome-icon :icon="['fas', 'check']"/></span>
    </button>
    <input class="todo-text" defaultValue="" />
    <button class="remove-btn" name="remove-btn">
      <span><font-awesome-icon :icon="['fas', 'times-circle']"/></span>
    </button>
  </div>
</template>
