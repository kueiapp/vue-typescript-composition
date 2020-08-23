<template>
	<div class="hello">
		<section style="margin-bottom:32px;">
			<h1 v-if="show">{{ msg }}</h1>
			<button @click="toggle">Toggle above to hide</button>
		</section>
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

	import { totoListLogic } from "@/compositions/todoListLogic";
	import { toggleLogic } from "@/compositions/toggleLogic";

	export default Vue.extend({
		name: "HelloWorld",
		props: {
			msg: String,
		},
		setup() {
			// todo business logic
			const {
				state,
				getLatestTodoId,
				addTodo,
				editTodo,
				cancelEdit,
				doneEdit,
			} = totoListLogic();

			// toggle business logic
			const { show, toggle } = toggleLogic();

			return {
				state,
				addTodo,
				editTodo,
				doneEdit,
				cancelEdit,
				show,
				toggle,
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
