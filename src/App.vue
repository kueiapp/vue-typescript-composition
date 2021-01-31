<template>
	<div id="app">
		<button @click="triggerExample(0)">Mixin components</button>
		<button @click="triggerExample(1)">Composition component</button>
		<section v-if="example === 0">
			<button @click="triggerMixinComponent">Trigger HelloWorld components</button>
			<div><img alt="Vue logo" src="@/assets/logo.png" /></div>
			<HelloWorld v-if="showComponent === 0" msg="Component 0" />
			<HelloWorld2 v-else msg="Component 1" />
		</section>
		<section v-else>
			<HelloVue />
			<HelloWorldComposition msg="Composition Component" />
		</section>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import HelloWorldComposition from "./components/HelloWorld-composition.vue";
	import HelloWorld from "./components/HelloWorld-mixin.vue";
	import HelloWorld2 from "./components/HelloWorld-mixin2.vue";
	import HelloVue from "./components/HelloVue.vue";

	export default Vue.extend({
		name: "App",
		components: {
			HelloWorld,
			HelloVue,
			HelloWorld2,
			HelloWorldComposition
		},
		data() {
			return {
				example: 0,
				showComponent: 0
			}
		},
		methods: {
			triggerMixinComponent() {
				this.showComponent = 1 - this.showComponent;
			},
			triggerExample(id: number) {
				this.example = id;
			}
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

		> button {
			height: 55px;
			background-color: yellow;
			margin-right: 10px;
		}

		section {
			margin-top: 44px;
		}
	}
</style>
