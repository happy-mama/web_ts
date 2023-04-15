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
	<div class="title">{{ post.header }}</div>
	<div class="text">{{ post.text }}</div>
	<div class="footer">
		<button class="likes">
			<img class="img" src="@/assets/svg/like.svg">
			<div class="count">5</div>
		</button>
		<div class="comments">23</div>
		<div class="author">{{ post.author.login }}</div>
	</div>
</template>