<script lang="ts">
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
	data() {
		return {
			method: "",
			url: "",
			headers: "",
			params: "",
			data: "",
			responce: {}
		}
	},
	methods: {
		async request() {
			axios.request({
				method: this.method,
				url: "https://api.rancor.space/" + this.url,
				headers: this.headers ? JSON.parse(this.headers) : {},
				params: this.params ? JSON.parse(this.params) : {},
				data: this.data ? JSON.parse(this.data) : {},
			}).then(_data => {
				this.responce = _data.data
			})
		}
	}
})
</script>



<template>
	<ambed>
		<aHeader>GET</aHeader>
		<aText>
			All GET requests links: <aSpecial>/users</aSpecial>, <aSpecial>/guilds</aSpecial><br>
			<br>
			<aSpecial>AXIOS</aSpecial> guide
			<aLevel>
				You need to download <a href="https://www.npmjs.com/package/axios">axios</a> NodeJS module.<br>
				<br>
				Common JS example
				<pre><code lang="js">// requiring axios module
const axios = require("axios").default

axios({
	method: "get",                              // chose request method "get" || "post"
	url: "https://api.rancor.space/users/get",  // set site url
	headers: {},                                // request headers
	params: {                                   // url params
		authorId: "some id",                    //
		guildId: "another id"                   //
	},                                          //
	data: {}                                    // raw json object for POST request
}).then(_d => {                                 // using promise
	console.log(_d.data)                        // do something with our responce
})</code></pre>

			</aLevel>
		</aText>
		<aHeader>POST</aHeader>
		<aLevel>
			Same as <aSpecial>GET</aSpecial> request but use <aSpecial>data</aSpecial> except <aSpecial>params
			</aSpecial>.
		</aLevel>
		<aHeader>ERRORS</aHeader>
		<aLevel>
			<table>
				<thead>
					<tr>
						<th>error</th>
						<th>description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>EPARAMSLENGTH</td>
						<td>Params length must be equal to 18 symbols.</td>
					</tr>
					<tr>
						<td>NOUSER</td>
						<td>There is no such user in DB.</td>
					</tr>
					<tr>
						<td>EBADPARAMS</td>
						<td>Api dont get url params.</td>
					</tr>
					<tr>
						<td>EBADBODY</td>
						<td>Api dont get request body.</td>
					</tr>
					<tr>
						<td>EINVALIDROUTE</td>
						<td>You are trying to send request to invalid url.</td>
					</tr>
					<tr>
						<td>EROUTEISOFF</td>
						<td>This url is truned off for some reason.</td>
					</tr>
					<tr>
						<td>EINTERNAL</td>
						<td>Api error, please contact with me and explain how you get it.</td>
					</tr>
				</tbody>
			</table>
		</aLevel>
		<aHeader>EXAMPLE</aHeader>
		<aLevel>
			Input parameters and get some data.<br>
			<table>
				<thead>
					<tr>
						<th>Param</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>method</td>
						<td><input v-model="method" placeholder="GET or POST"></td>
					</tr>
					<tr>
						<td>url</td>
						<td>https://api.rancor.space/<br><input v-model="url" placeholder="url"></td>
					</tr>
					<tr>
						<td>headers</td>
						<td><input v-model="headers" placeholder="..."></td>
					</tr>
					<tr>
						<td>params</td>
						<td><input v-model="params" placeholder="for GET request"></td>
					</tr>
					<tr>
						<td>data</td>
						<td><input v-model="data" placeholder="for POST request"></td>
					</tr>
				</tbody>
			</table>
			<button @click="request">check</button>
			<aSpecial>result</aSpecial>
			<pre><code lang="js">{{ responce }}</code></pre>
		</aLevel>
	</ambed>
</template>