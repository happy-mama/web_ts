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
				if (to.query.dir.includes("/")) { this.useBack = true } else { this.useBack = false }
				if (to.query.dir.split("/").length > 2) { this.useRoot = true } else { this.useRoot = false }
			})
		}
	},
	components: { FSFile }
});
</script>

<template>
	<div class="midle">
		<div class="e" style="min-width: 80vw;">
			<div class="msg">
				<div class="title">FS</div>
				<div class="description">
					<p class="special" v-if="loading">Loading api data...</p>
					<div v-if="!loading">
						Path: <p class="special">public{{ path }}/</p>
						<ul class="list">
							<FSFile v-if="apiData" :data="apiData" />
						</ul>
						<RouterLink class="FSFL" v-if="useBack" :to="oldPath">
							<img src="@/assets/svg/back.svg">
							<div>
								back
							</div>
						</RouterLink>
						<RouterLink class="FSFL" v-if="useRoot" to="/instruments/FS?dir=">
							<img src="@/assets/svg/root.svg">
							<div>
								root
							</div>
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>