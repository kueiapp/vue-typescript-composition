<template>
	<div id="app">
		<HelloVue />
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import HelloWorld from "./components/HelloWorld.vue";
	import HelloVue from "./components/HelloVue.vue";

	export default Vue.extend({
		name: "App",
		components: {
			HelloWorld,
			HelloVue,
		},
	});
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
