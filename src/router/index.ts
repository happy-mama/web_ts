import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "../views/HomeView.vue"
import ClickerView from "../views/ClickerView.vue"
import XView from "../views/instruments/XView.vue"
import ApiView from "../views/instruments/ApiView.vue"
import FSView from "../views/instruments/FSView.vue"
import PassgenView from "../views/instruments/PassgenView.vue"
import PosterView from "../views/instruments/PosterView.vue"
import PostsView from "../views/instruments/PostsView.vue"
import UserLOGINView from "../views/UserLOGINView.vue"
import AuthView from "../views/AuthView.vue"
import DBHGuideView from "../views/instruments/DBHGuideView.vue"

import TestView from "../views/TestView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView
		}, {
			path: "/clicker",
			name: "clicker",
			component: ClickerView
		}, {
			path: "/instruments",
			name: "instruments",
			component: XView
		}, {
			path: "/instruments/api",
			name: "instruments/api",
			component: ApiView
		}, {
			path: "/instruments/FS",
			name: "instruments/FS",
			component: FSView
		}, {
			path: "/instruments/passgen",
			name: "instruments/passgen",
			component: PassgenView
		}, {
			path: "/auth",
			name: "auth",
			component: AuthView
		}, {
			path: "/test",
			name: "test",
			component: TestView
		}, {
			path: "/instruments/poster",
			name: "instruments/poster",
			component: PosterView
		}, {
			path: "/user/:login",
			name: "user/LOGIN",
			component: UserLOGINView
		}, {
			path: "/instruments/posts",
			name: "instruments/posts",
			component: PostsView
		}, {
			path: "/instruments/DBH",
			name: "instruments/DBH",
			component: DBHGuideView
		}
	]
})

export default router
