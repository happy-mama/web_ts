<script lang="ts">
import type { PropType } from "vue";

interface jopa {
	[index: number]: { file: string, dir: string }
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
		<a class="FSFL" v-if="item.dir.startsWith('https://')" :href="item.dir" target="_blank">
			<img src="@/assets/svg/file.svg">
			<div>
				{{ item.file }}
			</div>
		</a>
		<router-link class="FSFL" v-else :to="item.dir">
			<img src="@/assets/svg/folder.svg">
			<div>
				{{ item.file }}
			</div>
		</router-link>
	</li>
</template>