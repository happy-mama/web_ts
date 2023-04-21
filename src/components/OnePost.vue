<script lang="ts">
import type { PropType } from "vue";

interface Post {
	myLike: boolean,
	_id: string,
	header: string,
	text: string,
	likes: number,
	comments: number,
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
	},
	methods: {
		like() {
			this.$parent.like(this.post._id)
		}
	}
}
</script>

<template>
	<div class="title">{{ post.header }}</div>
	<div class="text">{{ post.text }}</div>
	<div class="footer">
		<button :class="post.myLike ? 'likes-active' : 'likes'" @click="like">
			<img class="img" src="@/assets/svg/like.svg">
			<div class="count">{{ post.likes }}</div>
		</button>
		<button class="comments">
			<img class="img" src="@/assets/svg/comment.svg">
			<div class="count">{{ post.comments }}</div>
		</button>
		<div class="author">{{ post.author.login }}</div>
	</div>
</template>