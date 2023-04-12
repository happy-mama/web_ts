<script lang="ts">
import type { PropType } from "vue";

interface Post {
	header: string,
	text: string,
	author: {
		login: string
	}
}

export default {
	props: {
		post: {
			type: Object as PropType<Post>,
			required: true
		}
	}
}
</script>

<template>
	<div class="header">{{ post.header }}</div>
	<div>{{ post.text }}</div><br>
	<p class="special">{{ post.author.login }}</p>
</template>