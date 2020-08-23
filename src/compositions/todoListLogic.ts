import { reactive, computed, ComputedRef } from "@vue/composition-api";

type Todo = {
	id: number;
	completed: boolean;
	editing: boolean;
	title: string;
};
export const totoListLogic = () => {
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
	return { state, getLatestTodoId, addTodo, editTodo, cancelEdit, doneEdit };
};
