<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input
      class="add-todo"
      v-focus
      type="text"
      placeholder="add something"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <div v-for="todo in todoList" :key="todo.id" class="todo-row">
      <input type="checkbox" @click="deleteTodo(todo.id)" />
      <div v-if="!todo.editing" @dblclick="editTodo(todo)">
        {{ todo.title }}
      </div>
      <input
        v-else
        type="text"
        v-model="todo.title"
        @blue="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit(todo)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorldMixin from "@/mixins/HelloWorld-mixin";

type Todo = {
  id: number;
  completed: boolean;
  editing: boolean;
  title: string;
};

export default HelloWorldMixin.extend({
  name: "component-hello-world-2",
  props: {
    msg: String
  },
  data() {
    return {
      todoList: [
        {
          id: 1,
          title: "おはよう",
          completed: false,
          editing: false
        },
      ]
    };
  },
  mounted() {
    console.warn(`component2 mounted..`);
    console.log(JSON.stringify(this.$data));
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
  font-size: 22pt;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 20px;
}
a {
  color: red;
}
.add-todo {
  width: 300px;
  margin-bottom: 32px;
  height: 66px;
  background: orange;
}
.todo-row {
  height: 46px;
  color: red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  margin: 0 auto;
}
</style>
