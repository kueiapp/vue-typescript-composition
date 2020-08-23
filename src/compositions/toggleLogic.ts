import { ref } from "@vue/composition-api";

export const toggleLogic = () => {
	const show = ref(true);
	const toggle = () => {
		show.value = !show.value;
	};
	return { show, toggle };
};
