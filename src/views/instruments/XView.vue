<template>
	<div class="container">
		<div class="embed">
			<div class="header">
				<a :href="apiLink" target="_blank">api</a>
			</div>
			<div class="text">
				Web api
			</div>
			<div class="header"><router-link to="/instruments/FS?dir=">FS</router-link></div>
			<div class="text">
				Public folder of server. View and download what you want.
			</div>
			<div class="header"><router-link to="/instruments/passgen">Password generator</router-link></div>
			<div class="text">
				Generate a strong password.
			</div>
			<div class="header">Posts</div>
			<div class="level">
				See <router-link to="/instruments/posts">posts page</router-link>!<br>
				If you want to create one, go here: <router-link to="/instruments/poster?api=rancor">create post</router-link>
			</div>
		</div>
	</div>
</template>