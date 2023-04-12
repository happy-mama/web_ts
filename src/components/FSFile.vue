<script lang="ts">
import type { PropType } from "vue";

interface jopa {
	[index: number]: {file: string, dir: string}
}

export default {
	props: {
		data: {
			type: Object as PropType<jopa>,
			required: true
		}
	}
}
</script>

<template>
	<li v-for="item in data" :key="item">
		<a v-if="item.dir.startsWith('https://')" :href="item.dir" target="_blank">{{ item.file }}</a>
		<router-link v-else :to="item.dir">{{ item.file }}</router-link>
	</li>
</template>