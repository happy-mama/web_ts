<template>
	<div class="midle">
		<div class="e">
			<a class="bar" :href=apiLink target="_blank">
				<div class="msg">
					<div class="title">Api</div>
					<div class="description">
						<p class="special">Express</p> api
					</div>
				</div>
			</a>
			<div class="space"></div>
			<router-link class="bar" to="/instruments/FS?dir=">
				<div class="msg">
					<div class="title">FS</div>
					<div class="description">
						Public folder of server. View and download what you want.
					</div>
				</div>
			</router-link>
			<div class="space"></div>
			<router-link class="bar" to="/instruments/passgen">
				<div class="msg">
					<div class="title">Password generator</div>
					<div class="description">
						Generate a strong password
					</div>
				</div>
			</router-link>
			<div class="space"></div>
			<router-link class="bar" to="/instruments/posts?thread=test">
				<div class="msg">
					<div class="title">Posts</div>
					<div class="description">
						See posts on my page
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>