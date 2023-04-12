<script lang="ts">
import type { RouteLocationRaw } from "vue-router"

export default {
	props: {
		url: String as RouteLocationRaw,
		name: String
	}
}
</script>

<template>
	<router-link :to="url" v-slot="{ isActive }">
		<li v-if="isActive" class="active">
			{{ name }}
		</li>
		<li v-if="!isActive" class="non-active">
			{{ name }}
		</li>
	</router-link>
</template>