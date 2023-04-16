<script lang="ts">
import type { PropType } from "vue";

interface Post {
	id: string,
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
		<button class="comments">
			<img class="img" src="@/assets/svg/comment.svg">
			<div class="count">23</div>
		</button>
		<div class="author">{{ post.author.login }}</div>
	</div>
</template>