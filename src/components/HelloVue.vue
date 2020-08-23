<template>
	<div class="hello">
		<section style="margin-bottom:32px;">
			<div><button @click="toggle">Toggle image</button></div>
			<div><img v-if="show" alt="Vue logo" src="../assets/logo.png" /></div>
		</section>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import { toggleLogic } from "@/compositions/toggleLogic";

	export default Vue.extend({
		name: "hello-vue",
		props: {
			msg: String,
		},
		setup() {
			// toggle business logic
			const { show, toggle } = toggleLogic();

			return {
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
