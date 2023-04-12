<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			execBtnDisable: false,
			password: "",
			genOptions: {
				length: "12",
				numbers: true,
				uppercase: true,
				lowercase: true,
				specialSymbols: false
			},
			genPrefabs: {
				numbers: "0123456789",
				lowercase: "abcdefghijklmnopqrstuvwxyz",
				uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
				specialSymbols: "!%*^()?@#$"
			}
		}
	},
	methods: {
		passgen(charSet: string) {
			let password = ""

			for (let i = 0; i < Number(this.genOptions.length); i++) {
				const rndInt = Math.floor(Math.random() * charSet.length)
				password += charSet.substring(rndInt, rndInt + 1)
			}

			return password
		},
		execute() {
			this.execBtnDisable = true
			let charSet = ""
			let genQualityMax = 0

			if (this.genOptions.numbers) { charSet += this.genPrefabs.numbers; genQualityMax += 1 }
			if (this.genOptions.uppercase) { charSet += this.genPrefabs.uppercase; genQualityMax += 1 }
			if (this.genOptions.lowercase) { charSet += this.genPrefabs.lowercase; genQualityMax += 1 }
			if (this.genOptions.specialSymbols) { charSet += this.genPrefabs.specialSymbols; genQualityMax += 1 }

			let password = ""
			let genQuality = 0
			let tryed = 0

			while (genQuality < genQualityMax) {

				if (tryed > 10) { genQuality = 5 }
				tryed += 1

				password = this.passgen(charSet)

				if (this.genOptions.specialSymbols) {
					// eslint-disable-next-line no-useless-escape
					if (password.match(/\!|\%|\*|\^|\(|\)|\?|\@|\#|\$/g)) { genQuality += 1 }
				}

				if (this.genOptions.lowercase) {
					if (password.match(/[a-z]/g)) { genQuality += 1 }
				}

				if (this.genOptions.uppercase) {
					if (password.match(/[A-Z]/g)) { genQuality += 1 }
				}

				if (this.genOptions.numbers) {
					if (password.match(/[0-9]/g)) { genQuality += 1 }
				}
			}

			this.password = password
			this.execBtnDisable = false
		},
		copy() {
			navigator.clipboard.writeText(this.password)
		}
	},
	mounted() {
		this.execute()
		this.copy()
	}
})
</script>

<template>
		<div class="embed">
			<div class="header">options</div>
			<div class="level">
				<p class="special">length:</p>
				<select v-model="genOptions.length" name="value">
					<option value="8">8</option>
					<option value="12">12</option>
					<option value="16">16</option>
					<option value="20">20</option>
					<option value="24">24</option>
					<option value="28">28</option>
					<option value="32">32</option>
				</select><br>
				<label><input v-model="genOptions.numbers" type="checkbox">
					<p class="special">numbers ( 0 - 9 )</p><br>
				</label>
				<label><input v-model="genOptions.uppercase" type="checkbox">
					<p class="special">uppercase letters ( A - Z )</p><br>
				</label>
				<label><input v-model="genOptions.lowercase" type="checkbox">
					<p class="special">lowercase letters ( a - z )</p><br>
				</label>
				<label><input v-model="genOptions.specialSymbols" type="checkbox">
					<p class="special">special symbols ( !, %, *, ^, (, ), ?, @, #, $ )</p>
				</label>
			</div>
			<div class="header">Password</div>
			<div class="level">
				<p class="special">{{ password }}</p><br>
				<button :disabled="execBtnDisable" @click="execute()">GENERATE</button>
				<button @click="copy()">COPY</button>
			</div>
		</div>
</template>