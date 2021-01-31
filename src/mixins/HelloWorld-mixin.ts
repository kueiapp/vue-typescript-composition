import Vue from "vue";

type Todo = {
  id: number;
  completed: boolean;
  editing: boolean;
  title: string;
};
export default Vue.extend({
  name: "component-hello-world",
  props: {
    msg: String
  },
  data() {
    return {
      todoList: [
        {
          id: 1,
          title: "hello",
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: "world",
          completed: false,
          editing: false
        }
      ],
      newTodo: undefined as undefined | string
    };
  },
  computed: {
    getLatestTodoId(): number {
      const lastTodo: Todo = this.todoList[this.todoList.length - 1];
      return lastTodo.id;
    }
  },
  mounted() {
    console.warn(`mixin mounted..`);
    console.log(JSON.stringify(this.$data));
  },
  methods: {
    deleteTodo(id: number) {
      console.log(`deleteTodo in mixin: ${ id }`);
    },
    addTodo() {
      if (this.newTodo === undefined) return;
      this.todoList.push({
        id: this.getLatestTodoId + 1,
        title: this.newTodo,
        completed: false,
        editing: false
      });
    },

    editTodo(todo: Todo) {
      todo.editing = !todo.editing;
    },

    cancelEdit(todo: Todo) {
      const editingTodo: Todo | undefined = this.todoList.find(
        (todo: Todo) => todo.editing === true
      );
      if (editingTodo === undefined) return;
      editingTodo.editing = false;
    },

    doneEdit(todo: Todo) {
      const editingTodo: Todo | undefined = this.todoList.find(
        (todo: Todo) => todo.editing === true
      );
      if (editingTodo === undefined) return;
      editingTodo.title = todo.title;
      editingTodo.editing = false;
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
});
