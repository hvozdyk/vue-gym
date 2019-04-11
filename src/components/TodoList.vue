<template>
  <div>
    <BaseInputText
      v-model="newTodoText"
      placeholder="New Todo"
      @keydown.enter="addTodo"
    ></BaseInputText>
    <ul>
      <TodoListItem
        v-for="todo in todos"
        :todo="todo"
        :key="todo.id"
        @remove="removeTodo"
      ></TodoListItem>
    </ul>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
import BaseInputText from "./BaseInputText.vue";

let nextTodoId = 1;
export default {
  components: { TodoListItem, BaseInputText },
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: nextTodoId++,
          text: "Learn Vue"
        },
        {
          id: nextTodoId++,
          text: "Read recommendations"
        },
        {
          id: nextTodoId++,
          text: "Try examples"
        }
      ]
    };
  },
  methods: {
    addTodo() {
      const text = this.newTodoText.trim();
      if (text) {
        this.todos.push({
          id: nextTodoId++,
          text
        });
        this.newTodoText = "";
      }
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(({ id }) => id !== todoId);
    }
  }
};
</script>
