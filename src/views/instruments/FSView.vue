<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";
import FSFile from "../../components/FSFile.vue"

export default defineComponent({
	data() {
		return {
			apiData: [],
			path: "",
			oldPath: "/instruments/FS?dir=",
			useRoot: false,
			useBack: false,
			loading: true
		};
	},
	methods: {
		async request() {
			return new Promise((result) => {
				axios.request({
					method: "get",
					url: this.apiLink + "/FS",
					headers: {},
					params: { dir: this.path }
				}).then(res => {
					this.apiData = res.data
					this.loading = false
					result(void [])
				});
			})
		}
	},
	mounted() {
		this.request();
	},
	watch: {
		$route(to) {
			this.loading = true
			if (to.query.dir) {
				this.oldPath = "/instruments/FS?dir=" + to.query.dir.split("/").slice(0, -1).join("/")
				this.path = to.query.dir
			} else {
				this.path = ""
			}
			this.request().then(() => {
				// this.loading = false
				if (to.query.dir.includes("/")) { this.useBack = true } else { this.useBack = false }
				if (to.query.dir.split("/").length > 2) { this.useRoot = true } else { this.useRoot = false }
			})
		}
	},
	components: { FSFile }
});
</script>

<template>
	<div class="embed">
		<div class="header">FS</div>
		<div class="text">
			<ul>
				<p class="special" v-if="loading">LOADING API DATA...</p>
				<FSFile v-if="apiData && !loading" :data="apiData" /><br>
				<RouterLink v-if="useBack && !loading" :to="oldPath">back</RouterLink><br>
				<RouterLink v-if="useRoot && !loading" to="/instruments/FS?dir=">root</RouterLink>
			</ul>
		</div>
	</div>
</template>