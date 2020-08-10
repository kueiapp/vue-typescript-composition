<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<input
			class="add-todo"
			v-focus
			type="text"
			placeholder="add something"
			v-model="state.newTodo"
			@keyup.enter="addTodo"
		/>
		<div v-for="todo in state.todoList" :key="todo.id" class="todo-row">
			<input type="checkbox" v-model="todo.completed" />
			<div v-if="!todo.editing" @dblclick="editTodo(todo)">
				{{ todo.title }}
			</div>
			<input
				v-else
				type="text"
				v-model="todo.title"
				@blur="doneEdit(todo)"
				@keyup.enter="doneEdit(todo)"
				@keyup.esc="cancelEdit(todo)"
				v-focus
			/>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import {
		reactive,
		computed,
		onMounted,
		ComputedRef,
	} from "@vue/composition-api";

	type Todo = {
		id: number;
		completed: boolean;
		editing: boolean;
		title: string;
	};
	export default Vue.extend({
		name: "HelloWorld",
		props: {
			msg: String,
		},
		setup() {
			onMounted(() => {
				console.warn(`component mounted..`);
			});

			const state = reactive({
				todoList: [
					{
						id: 1,
						title: "hello",
						completed: false,
						editing: false,
					},
					{
						id: 2,
						title: "world",
						completed: false,
						editing: false,
					},
				],
				newTodo: undefined as undefined | string,
			});

			const getLatestTodoId: ComputedRef<number> = computed((): number => {
				const lastTodo: Todo = state.todoList[state.todoList.length - 1];
				return lastTodo.id;
			});

			function addTodo() {
				if (state.newTodo === undefined) return;
				state.todoList.push({
					id: getLatestTodoId.value + 1,
					title: state.newTodo,
					completed: false,
					editing: false,
				});
			}

			function editTodo(todo: Todo) {
				todo.editing = !todo.editing;
			}

			function cancelEdit(todo: Todo) {
				todo.editing = false;
			}

			function doneEdit(todo: Todo) {
				const editingTodo: Todo | undefined = state.todoList.find(
					(todo: Todo) => todo.editing === true
				);
				if (editingTodo === undefined) return;
				editingTodo.title = todo.title;
				editingTodo.editing = false;
			}

			return {
				state,
				addTodo,
				editTodo,
				doneEdit,
				cancelEdit,
			};
		},
		directives: {
			focus: {
				inserted(el) {
					el.focus();
				},
			},
		},
	});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
	.add-todo {
		width: 300px;
		margin-bottom: 16px;
	}
	.todo-row {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 300px;
		margin: 0 auto;
	}
</style>
