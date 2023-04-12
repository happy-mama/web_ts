<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			score: 0,
			shopLevelCost: 1.6,
			scorePerClick: 1,
			scoreProduction: 0,
			shop: {
				"autoclicker": {
					price: 35,
					production: 1,
					count: 0
				}, "minecraft_cheats": {
					price: 100,
					production: 3,
					count: 0
				}
			}
		}
	},
	methods: {
		addScore() {
			this.score += this.scorePerClick
		},
		buyUpgrade(name: string) {
			const upgrade = this.shop[name as keyof typeof this.shop]
			if (upgrade) {
				if (this.score >= upgrade.price) {
					this.score -= upgrade.price
					this.scoreProduction += upgrade.production
					upgrade.price = Math.floor(upgrade.price * this.shopLevelCost)
					upgrade.count = upgrade.count + 1
				}
			}
		}
	},
	mounted() {
		setInterval(() => {
			this.score += this.scoreProduction
		}, 1000)
	}
})
</script>

<template>
	<div class="embed">
		<div class="midle"><button @click="addScore()">CLICK</button></div>
		<div class="header">STATS</div>
		<div class="text">
			<div class="midle">
				<p class="special">SCORE</p>: <p class="number">{{score}}</p><br><br>
				<p class="special">per click</p>: <p class="number">{{scorePerClick}}</p><br>
				<p class="special">per second</p>: <p class="number">{{scoreProduction}}</p>
			</div>
		</div>
		<div class="header">UPGRADES</div>
		<div class="level">
			<button @click="buyUpgrade('autoclicker')">autoclicker</button><br>
			You have: <p class="number">{{shop["autoclicker"].count}}</p><br>
			Cost: <p class="number">{{shop["autoclicker"].price}}</p><br>
			Production: <p class="number">{{shop["autoclicker"].production}}</p><br>
			<button @click="buyUpgrade('minecraft_cheats')">minecraft cheats</button><br>
			You have: <p class="number">{{shop["minecraft_cheats"].count}}</p><br>
			Cost: <p class="number">{{shop["minecraft_cheats"].price}}</p><br>
			Production <p class="number">{{shop["minecraft_cheats"].production}}</p><br>
		</div>
	</div>
</template>