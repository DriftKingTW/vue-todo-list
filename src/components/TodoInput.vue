<template>
  <ul>
    <div class="todo-item-wrapper grid-container-input">
      <input
        type="text"
        name="todoContent"
        class="input-text"
        v-model="todoContent"
        @keyup.enter="onSubmit"
        placeholder="Do Something! =)"
      />
      <button type="submit" class="btn-add" @click.prevent="onSubmit">
        <span><font-awesome-icon :icon="['fas', 'plus']"/></span>
      </button>
    </div>
  </ul>
</template>

<script>
export default {
  name: "todo-input",
  data() {
    return {
      todoContent: ""
    };
  },
  methods: {
    onSubmit() {
      this.$emit("todo-submitted", this.todoContent);
      this.todoContent = "";
    }
  }
};
</script>
