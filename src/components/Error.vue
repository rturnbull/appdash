<template>
  <v-alert :type="type" dismissible @input="onClose" :value="true">{{
    text
  }}</v-alert>
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