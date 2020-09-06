<template>
  <v-alert :type="type" dismissible @input="onClose">{{ text }}</v-alert>
</template>

<script>
/* eslint-disable */
	export default {
		props: ["text", "type"],
		methods: {
			onClose() {
				this.$emit("dismissed");
			}
		}
	};
</script>