<script setup lang="ts">
import CNavbarLink from "../components/CNavbarLink.vue";
import AccountBar from "./AccountBar.vue";
</script>

<template>
	<header>
		<div class="navbar">
			<ul>
				<AccountBar />
				<CNavbarLink url="/" name="home" />
				<CNavbarLink url="/instruments" name="instruments" />
			</ul>
		</div>
	</header>
</template>